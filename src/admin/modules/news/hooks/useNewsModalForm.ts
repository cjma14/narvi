import { useEffect, useState, type ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { newsService } from '../services/news.service';
import type { News, NewsFormData, NewsModalMode, NewsPayload } from '../types';
import { getErrorMessage, getImageUrl, isHtmlEmpty, toSlug } from '../utils/news.utils';

interface UseNewsModalFormOptions {
  isOpen: boolean;
  mode: NewsModalMode;
  news: News | null;
  onSuccess: () => void;
}

const defaultValues: NewsFormData = {
  title: '',
  url_alias: '',
  body: '',
  title_en: '',
  url_alias_en: '',
  body_en: '',
  published: false,
  cover_image_ids: {
    es: '',
    en: '',
  },
};

/** Encapsula la lógica del formulario modal de noticias. */
export function useNewsModalForm({ isOpen, mode, news, onSuccess }: UseNewsModalFormOptions) {
  const [loading, setLoading] = useState(false);
  const [loadingNews, setLoadingNews] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [coverPreviewUrls, setCoverPreviewUrls] = useState<Record<'es' | 'en', string>>({ es: '', en: '' });
  const [removedCovers, setRemovedCovers] = useState<Record<'es' | 'en', boolean>>({ es: false, en: false });

  const form = useForm<NewsFormData>({ defaultValues });
  const {
    handleSubmit,
    reset,
    setValue,
    watch,
  } = form;

  const title = watch('title');

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (mode === 'create') {
      reset(defaultValues);
      setCoverPreviewUrls({ es: '', en: '' });
      setRemovedCovers({ es: false, en: false });
      return;
    }

    if (!news?.id) {
      return;
    }

    const loadDetail = async () => {
      try {
        setLoadingNews(true);
        const detail = await newsService.getById(news.id);
        const coversByLanguage = (detail.covers || []).reduce<Record<'es' | 'en', News['cover']>>(
          (covers, cover) => {
            const language = cover.language?.code;

            if (language === 'es' || language === 'en') {
              covers[language] = cover;
            }

            return covers;
          },
          { es: null, en: null },
        );

        reset({
          title: detail.title || '',
          url_alias: detail.url_alias || '',
          body: detail.body || '',
          title_en: detail.translations_data?.en?.title || detail.translations?.en?.title || '',
          url_alias_en: detail.translations_data?.en?.url_alias || detail.translations?.en?.url_alias || '',
          body_en: detail.translations_data?.en?.body || detail.translations?.en?.body || '',
          published: !!detail.published,
          cover_image_ids: {
            es: coversByLanguage.es?.id ? String(coversByLanguage.es.id) : '',
            en: coversByLanguage.en?.id ? String(coversByLanguage.en.id) : '',
          },
        });
        setCoverPreviewUrls({
          es: getImageUrl(coversByLanguage.es),
          en: getImageUrl(coversByLanguage.en),
        });
        setRemovedCovers({ es: false, en: false });
      } catch (error) {
        console.error('Error loading news:', error);
        toast.error(getErrorMessage(error, 'Error al cargar la noticia'));
      } finally {
        setLoadingNews(false);
      }
    };

    void loadDetail();
  }, [isOpen, mode, news?.id, reset]);

  useEffect(() => {
    if (!title) {
      return;
    }

    setValue('url_alias', toSlug(title));
  }, [setValue, title]);

  const handleCoverUpload = async (language: 'es' | 'en', event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      setUploadingCover(true);
      const uploadedImage = await newsService.uploadCover(file);

      setValue(`cover_image_ids.${language}`, String(uploadedImage.id), {
        shouldDirty: true,
        shouldValidate: true,
      });
      setCoverPreviewUrls((previews) => ({
        ...previews,
        [language]: getImageUrl(uploadedImage) || URL.createObjectURL(file),
      }));
      setRemovedCovers((covers) => ({ ...covers, [language]: false }));
      toast.success('Imagen de portada subida exitosamente');
    } catch (error) {
      console.error('Error uploading cover image:', error);
      toast.error(getErrorMessage(error, 'Error al subir imagen de portada'));
    } finally {
      setUploadingCover(false);
      event.target.value = '';
    }
  };

  const handleRemoveCover = (language: 'es' | 'en') => {
    setValue(`cover_image_ids.${language}`, '', { shouldDirty: true, shouldValidate: true });
    setCoverPreviewUrls((previews) => ({ ...previews, [language]: '' }));
    setRemovedCovers((covers) => ({ ...covers, [language]: true }));
  };

  const submitForm = handleSubmit(async (data) => {
    if (isHtmlEmpty(data.body || '')) {
      toast.error('El contenido es requerido');
      return;
    }

    try {
      setLoading(true);

      const payload: NewsPayload = {
        title: data.title,
        url_alias: data.url_alias,
        body: data.body,
        published: data.published,
        translations: {},
      };

      const coverImageIds = (['es', 'en'] as const).reduce<NonNullable<NewsPayload['cover_image_ids']>>(
        (covers, language) => {
          if (removedCovers[language]) {
            covers[language] = null;
          } else if (data.cover_image_ids[language]) {
            covers[language] = Number(data.cover_image_ids[language]);
          }

          return covers;
        },
        {},
      );

      if (Object.keys(coverImageIds).length > 0) {
        payload.cover_image_ids = coverImageIds;
      }

      const enTranslations = {
        title: data.title_en.trim(),
        url_alias: data.url_alias.trim(),
        body: data.body_en,
      };

      if (enTranslations.title || enTranslations.url_alias || !isHtmlEmpty(enTranslations.body || '')) {
        payload.translations.en = {
          ...(enTranslations.title ? { title: enTranslations.title } : {}),
          ...(enTranslations.url_alias ? { url_alias: enTranslations.url_alias } : {}),
          ...(!isHtmlEmpty(enTranslations.body || '') ? { body: enTranslations.body } : {}),
        };
      }

      if (mode === 'create') {
        await newsService.create(payload);
      } else if (news?.id) {
        await newsService.update(news.id, payload);
      }

      toast.success(mode === 'create' ? 'Noticia creada exitosamente' : 'Noticia actualizada exitosamente');
      onSuccess();
    } catch (error) {
      console.error('Error saving news:', error);
      toast.error(getErrorMessage(error, 'Error al guardar noticia'));
    } finally {
      setLoading(false);
    }
  });

  return {
    body: watch('body'),
    coverPreviewUrls,
    form,
    handleCoverUpload,
    handleRemoveCover,
    loading,
    loadingNews,
    setValue,
    submitForm,
    uploadingCover,
  };
}
