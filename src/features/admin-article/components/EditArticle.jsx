import React, { useState, useEffect } from 'react';
import instance from '../../../utils/instance';

const EditArticle = ({ article, onSave, onCancel }) => {
  const [judul, setJudul] = useState(article.judul);
  const [konten, setKonten] = useState(article.konten);
  const [author, setAuthor] = useState(article.author); // Assuming you also have author
  const [linkFoto, setLinkFoto] = useState(article.link_foto); // Added for link_foto
  const [linkVideo, setLinkVideo] = useState(article.link_video || ''); // Added for link_video
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setJudul(article.judul);
    setKonten(article.konten);
    setAuthor(article.author);
    setLinkFoto(article.link_foto);
    setLinkVideo(article.link_video || '');
  }, [article]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await instance.put(`/admin/articles/${article.id}`, {
        judul,
        author, 
        konten,
        link_foto: linkFoto, // Send the updated link_foto
        link_video: linkVideo || '', // Optional, only if provided
      });
  
      if (response.status === 200) {
        onSave(response.data); // Pass updated article back to parent
        setLoading(false);
  
        // Reload the page after successful save
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat memperbarui artikel. Silakan coba lagi.');
      setLoading(false);
    }
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-full md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Artikel</h2>
          <button onClick={onCancel} className="text-gray-500 hover:text-gray-800 text-4xl">&times;</button>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="judul" className="block text-sm font-semibold text-gray-700">Judul</label>
          <input
            id="judul"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-semibold text-gray-700">Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="konten" className="block text-sm font-semibold text-gray-700">Konten</label>
          <textarea
            id="konten"
            value={konten}
            onChange={(e) => setKonten(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="link_foto" className="block text-sm font-semibold text-gray-700">Link Foto</label>
          <input
            id="link_foto"
            type="url"
            value={linkFoto}
            onChange={(e) => setLinkFoto(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="https://example.com/foto.jpg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="link_video" className="block text-sm font-semibold text-gray-700">Link Video</label>
          <input
            id="link_video"
            type="url"
            value={linkVideo}
            onChange={(e) => setLinkVideo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="https://example.com/video.mp4"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className={`px-4 py-2 ${loading ? 'bg-gray-400' : 'bg-green-500'} text-white rounded hover:bg-green-600`}
            disabled={loading}
          >
            {loading ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
