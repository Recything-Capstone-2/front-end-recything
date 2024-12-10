import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons for edit and delete

const ArticlesTable = () => {
  const initialArticles = [
    {
      title: "DPRD DKI Jakarta Dorong Pemprov Tingkatkan Kolaborasi Penanggulangan Sampah",
      author: "Restu Fadilah & Fabiola Rebrinastri",
      content:
        "Masalah pengelolaan sampah menjadi perhatian serius DPRD DKI Jakarta. Dengan volume sampah harian mencapai 8.000 ton yang dikirim ke TPST Bantargebang, kapasitas tempat tersebut kini telah melampaui batas. Tanpa solusi efektif, kondisi ini dapat menjadi tantangan besar bagi Jakarta di masa mendatang. Berbagai solusi seperti pemilahan sampah, pengolahan sampah berbasis teknologi, dan kerja sama dengan masyarakat harus segera diterapkan untuk mencegah dampak buruk yang lebih besar.",
      link: "https://dprd-dki-jakarta-sampah-solusi.com",
    },
    {
      title: "Pemanasan Global dan Dampaknya pada Sumber Daya Alam Indonesia",
      author: "Budi Santoso & Rina Anindya",
      content:
        "Pemanasan global merupakan isu lingkungan yang semakin mendesak. Indonesia, sebagai negara tropis dengan kekayaan alam yang melimpah, sangat rentan terhadap perubahan iklim. Fenomena pemanasan global dapat memperburuk bencana alam seperti banjir, kekeringan, dan kebakaran hutan. Oleh karena itu, perlindungan terhadap sumber daya alam Indonesia harus menjadi prioritas untuk menjaga keseimbangan ekosistem dan kehidupan masyarakat.",
      link: "https://pemanasan-global-sda-indonesia.com",
    },
    {
      title: "Transformasi Digital di Sektor Pendidikan Indonesia",
      author: "Diana Pratama & Arief Wijaya",
      content:
        "Transformasi digital telah mengubah cara pendidikan diterapkan di Indonesia. Dengan adanya pandemi COVID-19, sektor pendidikan semakin dipacu untuk mengadopsi teknologi dalam proses pembelajaran. Platform belajar online, kelas virtual, dan penggunaan aplikasi pendidikan telah membuka peluang untuk memperluas akses pendidikan bagi seluruh lapisan masyarakat. Meskipun tantangan terkait konektivitas dan aksesibilitas masih ada, kemajuan ini memberikan harapan besar untuk masa depan pendidikan di Indonesia.",
      link: "https://transformasi-digital-pendidikan.com",
    },
  ];

  const [articles, setArticles] = useState(initialArticles);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [editedArticle, setEditedArticle] = useState({
    title: "",
    author: "",
    content: "",
    link: "",
  });

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setEditedArticle({
      title: article.title,
      author: article.author,
      content: article.content,
      link: article.link,
    });
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  const handleEditClick = () => {
    setShowEditPopup(true); // Show edit popup
  };

  const handleSaveEdit = () => {
    // Save the edited article
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article === selectedArticle ? { ...selectedArticle, ...editedArticle } : article
      )
    );
    setSelectedArticle({ ...selectedArticle, ...editedArticle });
    setShowEditPopup(false);
  };

  const handleDeleteClick = () => {
    setShowDeletePopup(true); // Show delete confirmation popup
  };

  const handleConfirmDelete = () => {
    // Delete the selected article
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article !== selectedArticle)
    );
    setSelectedArticle(null); // Go back to article list
    setShowDeletePopup(false); // Close the delete confirmation popup
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false); // Close the delete confirmation popup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 shadow-xl rounded-lg max-w-6xl w-full">
        {/* Display article details when an article is selected */}
        {selectedArticle ? (
          <div className="space-y-6">
            <button
              className="text-blue-600 mb-4"
              onClick={handleBackClick}
            >
              &larr; Kembali ke daftar artikel
            </button>

            {/* Article Title */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-gray-700">Judul : </h1>
              <h3 className="text-xl font-semibold text-gray-700">{selectedArticle.title}</h3>
            </div>

            {/* Author */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold text-gray-700">Author : </h1>
              <p className="text-sm text-gray-500">By: {selectedArticle.author}</p>
            </div>

            {/* Content */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold text-gray-700">Konten : </h1>
              <p className="text-sm text-gray-600">{selectedArticle.content}</p>
            </div>

            {/* Link */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold text-gray-700">Link Foto : </h1>
              <a href={selectedArticle.link} className="text-blue-600 hover:underline">
                {selectedArticle.link}
              </a>
            </div>

            <div className="flex gap-2 items-center mt-6 justify-end">
              <button
                onClick={handleEditClick}
                className="text-gray-600 hover:text-gray-800 focus:outline-none flex items-center mr-4"
              >
                <FaEdit className="mr-1" /> Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="text-red-600 hover:text-red-800 focus:outline-none flex items-center"
              >
                <FaTrashAlt className="mr-1" /> Delete
              </button>
            </div>
          </div>
        ) : (
          // Display articles in a list before clicking on one
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-green-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleArticleClick(article)}
              >
                <h1 className="text-xl font-bold text-gray-700">Judul : </h1>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{article.title}</h3>
                <h1 className="text-xl font-bold text-gray-700">Author : </h1>
                <p className="text-sm text-gray-500 mb-2">By {article.author}</p>
                <h1 className="text-xl font-bold text-gray-700">Link Foto : </h1>
                <a href={article.link} className="text-blue-600 hover:underline mb-4 block">
                  {article.link}
                </a>
                <h1 className="text-xl font-bold text-gray-700">Konten : </h1>
                <p className="text-sm text-gray-600 mb-4">{article.content}</p>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Popup */}
      {showEditPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Edit Artikel</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Judul</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={editedArticle.title}
                onChange={(e) => setEditedArticle({ ...editedArticle, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Penulis</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={editedArticle.author}
                onChange={(e) => setEditedArticle({ ...editedArticle, author: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Konten</label>
              <textarea
                className="w-full h-40 p-2 border rounded-md"
                value={editedArticle.content}
                onChange={(e) => setEditedArticle({ ...editedArticle, content: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Link</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={editedArticle.link}
                onChange={(e) => setEditedArticle({ ...editedArticle, link: e.target.value })}
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSaveEdit}
                className="text-green-600 hover:text-green-800"
              >
                Simpan
              </button>
              <button
                onClick={() => setShowEditPopup(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Konfirmasi Penghapusan</h2>
            <p>Apakah Anda yakin ingin menghapus artikel ini?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleConfirmDelete}
                className="text-red-600 hover:text-red-800"
              >
                Ya, Hapus
              </button>
              <button
                onClick={handleCancelDelete}
                className="text-gray-600 hover:text-gray-800"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesTable;
