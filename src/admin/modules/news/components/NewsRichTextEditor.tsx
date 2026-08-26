import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import api from '../../../utils/api';

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:6650';

interface NewsRichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

interface ToolbarButtonProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

function ToolbarButton({ label, active = false, onClick }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors ${
        active
          ? 'bg-admin-secondary text-white border-admin-secondary'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
}

export default function NewsRichTextEditor({ value, onChange, error }: NewsRichTextEditorProps) {
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getImageUrl = (imageData: any): string => {
    if (!imageData) return '';
    if (typeof imageData.url === 'string' && imageData.url.length > 0) return imageData.url;
    if (typeof imageData.path === 'string' && imageData.path.length > 0) return `${API_URL}/storage/${imageData.path}`;
    return '';
  };

  const getUploadedImage = (response: any): any => {
    return response?.image || response?.data?.image || response?.data || response;
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: false,
        allowBase64: false,
      }),
    ],
    content: value || '<p></p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'min-h-[240px] p-4 focus:outline-none prose prose-sm max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:text-lg [&_h3]:font-semibold',
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
  });

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !editor) return;

    try {
      setIsUploadingImage(true);

      const formData = new FormData();
      formData.append('image', file);
      formData.append('type', 'body');

      const response = await api.postFormData('/api/images', formData);
      const uploadedImage = getUploadedImage(response);
      const imageUrl = getImageUrl(uploadedImage);

      if (!imageUrl) {
        throw new Error('No se pudo obtener la URL de la imagen subida');
      }

      editor
        .chain()
        .focus()
        .setImage({
          src: imageUrl,
          alt: file.name,
        })
        .run();

      toast.success('Imagen insertada en el contenido');
    } catch (error: any) {
      console.error('Error uploading body image:', error);
      toast.error(error.message || 'Error al subir imagen para el contenido');
    } finally {
      setIsUploadingImage(false);
      event.target.value = '';
    }
  };

  const openImagePicker = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (!editor) return;
    const currentValue = editor.getHTML();
    if (value !== currentValue) {
      editor.commands.setContent(value || '<p></p>', { emitUpdate: false });
    }
  }, [editor, value]);

  if (!editor) {
    return (
      <div className="w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-500">
        Cargando editor...
      </div>
    );
  }

  return (
    <div>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 bg-gray-50 p-2">
          <ToolbarButton
            label="Negrita"
            active={editor.isActive('bold')}
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <ToolbarButton
            label="Itálica"
            active={editor.isActive('italic')}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <ToolbarButton
            label="H2"
            active={editor.isActive('heading', { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          />
          <ToolbarButton
            label="H3"
            active={editor.isActive('heading', { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          />
          <ToolbarButton
            label="Lista"
            active={editor.isActive('bulletList')}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          />
          <ToolbarButton
            label="Numerada"
            active={editor.isActive('orderedList')}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          />
          <ToolbarButton
            label="Cita"
            active={editor.isActive('blockquote')}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          />
          <ToolbarButton
            label={isUploadingImage ? 'Subiendo imagen...' : 'Imagen'}
            onClick={openImagePicker}
          />
          <ToolbarButton label="Deshacer" onClick={() => editor.chain().focus().undo().run()} />
          <ToolbarButton label="Rehacer" onClick={() => editor.chain().focus().redo().run()} />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isUploadingImage}
            className="hidden"
          />
        </div>

        <EditorContent editor={editor} />
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
