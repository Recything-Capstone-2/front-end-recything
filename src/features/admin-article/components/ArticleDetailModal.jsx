import React, { useState } from 'react';
import EditArticle from './EditArticle';
import instance from '../../../utils/instance'; // Mengimpor instance axios

const ArticleDetailModal = ({ article, onClose, onEdit, onDelete }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEdit = (updatedArticle) => {
    onEdit(updatedArticle); // Menangani perubahan artikel
    setEditModalOpen(false); // Menutup modal setelah disimpan
  };

  const handleCancelEdit = () => {
    setEditModalOpen(false); // Menutup modal edit
  };

  const handleDelete = async (id) => {
    try {
      // Memanggil API untuk menghapus artikel berdasarkan id
      await instance.delete(`admin/article/${id}`);
      // Panggil onDelete untuk menghapus artikel dari daftar di UI (misalnya dari daftar artikel di parent component)
      onDelete(id);
      onClose(); // Menutup modal setelah artikel berhasil dihapus
      alert('Artikel berhasil dihapus.');

      // Refresh halaman setelah artikel dihapus
      window.location.reload();
    } catch (error) {
      console.error('Error menghapus artikel:', error);
      alert('Terjadi kesalahan saat menghapus artikel.');
    }
  };

  if (!article) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-7xl w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          {/* Header Section with Title and Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{article.judul}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-4xl"
            >
              &times; {/* Close button */}
            </button>
          </div>

          {/* Image Section */}
          <img
            src={article.link_foto || 'fallback-image-url.jpg'}
            alt={article.judul}
            className="w-full h-1/4 object-cover mb-4"
          />

          {/* Content Section */}
          <p className="text-sm text-gray-600 mb-4">{article.konten}</p>

          {/* Buttons for Edit and Delete */}
          <div className="flex justify-between">
            <button
              onClick={() => setEditModalOpen(true)} // Membuka modal edit
              className="px-4 py-2 border border-1 border-blue-500 text-blue-500 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(article.id)} // Memanggil fungsi handleDelete saat tombol Hapus ditekan
              className="px-4 py-2 border border-1 border-red-500 text-red-500 rounded-md"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>

      {/* Jika modal edit terbuka, tampilkan komponen EditArticle */}
      {isEditModalOpen && (
        <EditArticle article={article} onSave={handleEdit} onCancel={handleCancelEdit} />
      )}
    </div>
  );
};

export default ArticleDetailModal;
