import React, { useState } from 'react';
import instance from '../../../utils/instance';

const AddArticle = ({ onClose }) => {
  const [judul, setJudul] = useState('');
  const [author, setAuthor] = useState('');
  const [konten, setKonten] = useState('');
  const [linkFoto, setLinkFoto] = useState('');
  const [linkVideo, setLinkVideo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!judul || !author || !konten || !linkFoto) {
      setError('Semua field wajib diisi!');
      return;
    }

    const articleData = {
      judul,
      author,
      konten,
      link_foto: linkFoto,
      link_video: linkVideo || '', // Optional field, so we pass an empty string if not provided
    };

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await instance.post('/admin/articles', articleData);
      setSuccess('Artikel berhasil ditambahkan!');
      // Optionally, clear form fields
      setJudul('');
      setAuthor('');
      setKonten('');
      setLinkFoto('');
      setLinkVideo('');
      onClose(); // Close the modal after success
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat menambahkan artikel. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 relative">
      {/* Container for the title and close button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6">Tambah Artikel Baru</h1>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 text-4xl mb-7"
        >
          &times; {/* Close icon (X) */}
        </button>
      </div>
      
      {/* Success/Error Messages */}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold">Judul Artikel</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Masukkan judul artikel"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Masukkan nama penulis"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Konten</label>
          <textarea
            value={konten}
            onChange={(e) => setKonten(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Masukkan konten artikel"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Link Foto</label>
          <input
            type="url"
            value={linkFoto}
            onChange={(e) => setLinkFoto(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Masukkan link foto artikel"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Link Video (Opsional)</label>
          <input
            type="url"
            value={linkVideo}
            onChange={(e) => setLinkVideo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Masukkan link video (opsional)"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          disabled={loading}
        >
          {loading ? 'Menambahkan...' : 'Tambah Artikel'}
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
