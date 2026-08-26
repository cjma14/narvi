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
  cover_image_id: '',
};

/** Encapsula la lógica del formulario modal de noticias. */
export function useNewsModalForm({ isOpen, mode, news, onSuccess }: UseNewsModalFormOptions) {
  const [loading, setLoading] = useState(false);
  const [loadingNews, setLoadingNews] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [coverPreviewUrl, setCoverPreviewUrl] = useState('');

  const form = useForm<NewsFormData>({ defaultValues });
  const {
    handleSubmit,
    reset,
    setValue,
    watch,
  } = form;

  const title = watch('title');
  const titleEn = watch('title_en');

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (mode === 'create') {
      reset(defaultValues);
      setCoverPreviewUrl('');
      return;
    }

    if (!news?.id) {
      return;
    }

    const loadDetail = async () => {
      try {
        setLoadingNews(true);
        const detail = await newsService.getById(news.id);

        reset({
          title: detail.title || '',
          url_alias: detail.url_alias || '',
          body: detail.body || '',
          title_en: detail.translations_data?.en?.title || detail.translations?.en?.title || '',
          url_alias_en: detail.translations_data?.en?.url_alias || detail.translations?.en?.url_alias || '',
          body_en: detail.translations_data?.en?.body || detail.translations?.en?.body || '',
          published: !!detail.published,
          cover_image_id: detail.cover_image_id ? String(detail.cover_image_id) : '',
        });
        setCoverPreviewUrl(getImageUrl(detail.cover));
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

  useEffect(() => {
    if (!titleEn) {
      return;
    }

    setValue('url_alias_en', toSlug(titleEn));
  }, [setValue, titleEn]);

  const handleCoverUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      setUploadingCover(true);
      const uploadedImage = await newsService.uploadCover(file);

      setValue('cover_image_id', String(uploadedImage.id), {
        shouldDirty: true,
        shouldValidate: true,
      });
      setCoverPreviewUrl(getImageUrl(uploadedImage) || URL.createObjectURL(file));
      toast.success('Imagen de portada subida exitosamente');
    } catch (error) {
      console.error('Error uploading cover image:', error);
      toast.error(getErrorMessage(error, 'Error al subir imagen de portada'));
    } finally {
      setUploadingCover(false);
      event.target.value = '';
    }
  };

  const handleRemoveCover = () => {
    setValue('cover_image_id', '', { shouldDirty: true, shouldValidate: true });
    setCoverPreviewUrl('');
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
        cover_image_id: data.cover_image_id ? Number(data.cover_image_id) : null,
        translations: {},
      };

      const enTranslations = {
        title: data.title_en.trim(),
        url_alias: data.url_alias_en.trim(),
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
    coverImageId: watch('cover_image_id'),
    coverPreviewUrl,
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
