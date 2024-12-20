import React, { useState, useEffect } from "react";
import instance from "../../../utils/instance";
import AddArticle from "./AddArticle";
import ArticleDetailModal from "./ArticleDetailModal"; // Import the modal component
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import { confirmAlert } from "../../../components/share/Confirm.jsx";
import { showAlert } from "../../../components/share/Alert.jsx";

const ArticlesTable = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddArticleForm, setShowAddArticleForm] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalArticle, setTotalArticle] = useState(0);

  // Fetch data from the API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await instance.get(
          `/articles?page=${currentPage}&limit=6`
        );
        setArticles(response.data.data.items);
        setTotalPages(response.data.data.pagination.total_pages);
        setTotalArticle(response.data.data.pagination.total_items);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Terjadi kesalahan saat memuat artikel. Silakan coba lagi.");
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  // Function to truncate content to 17 words
  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 10) {
      return words.slice(0, 17).join(" ") + "...";
    }
    return content;
  };

  const handleAddArticleClick = () => {
    setShowAddArticleForm(true); // Show the AddArticle form
  };

  const handleCloseModal = () => {
    setShowAddArticleForm(false); // Hide the AddArticle form
    setSelectedArticle(null); // Close the Article Detail modal
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article); // Set selected article to show details
  };

  const handleDeleteArticle = async (id) => {
    try {
      const confirm = await confirmAlert({
        title: "Hapus Artikel",
        message: "Apakah Anda yakin ingin menghapus artikel ini?",
        confirmButtonText: "Ya, Hapus",
        cancelButtonText: "Batal",
        confirmButtonColor: "bg-red-600 hover:bg-red-700",
        cancelButtonColor: "bg-blue-600 hover:bg-blue-700 ml-2",
      });
  
      if (!confirm.isConfirmed) return;

      handleCloseModal(); // Close the modal after deletion

      const response = await instance.delete(`/admin/article/${id}`);
      setArticles(articles.filter((article) => article.id !== id)); // Remove article from state

      showAlert({
        text: "Artikel berhasil dihapus.",
        icon: "success",
      });

    } catch (err) {
      setError("Terjadi kesalahan saat menghapus artikel. Silakan coba lagi.");
    }
  };

  const handleEditArticle = (article) => {
    // Implement edit functionality here (open a form to edit the article)
    console.log("Edit Article:", article);
    handleCloseModal(); // Close the modal after clicking edit
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4 sm:p-8 lg:p-16 bg-green-50 min-h-screen max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6 gap-6">
        <h1 className="text-2xl font-bold"></h1>
        <button
          onClick={handleAddArticleClick}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + Tambah Artikel Baru
        </button>
      </div>

      {/* Modal - Add Article Form */}
      {showAddArticleForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full md:w-1/3">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times; {/* Close button */}
            </button>
            <AddArticle onClose={handleCloseModal} />
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`bg-white rounded-lg shadow overflow-hidden flex flex-col cursor-pointer ${
              index % 2 === 0 ? "col-span-1" : "col-span-1"
            }`}
            style={{ height: "354px" }}
            onClick={() => handleArticleClick(article)} // Click to view details
          >
            <img
              src={article.link_foto || "fallback-image-url.jpg"}
              alt={article.judul}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{article.judul}</h2>
              <p className="text-sm text-gray-600">
                {truncateContent(article.konten)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex flex-col mt-4">
        <span className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {(currentPage - 1) * 6 + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900">
            {Math.min(currentPage * 6, totalArticle)}
          </span>{" "}
          of <span className="font-semibold text-gray-900">{totalArticle}</span>{" "}
          entries
        </span>
        <div className="inline-flex mt-2">
          <button
            className="px-4 py-2 bg-primary-05 text-white rounded-l hover:bg-primary-01 disabled:bg-gray-400"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-primary-05 text-white rounded-r hover:bg-primary-01 disabled:bg-gray-400"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Show the Article Detail Modal */}
      {selectedArticle && (
        <ArticleDetailModal
          article={selectedArticle}
          onClose={handleCloseModal}
          onEdit={handleEditArticle}
          onDelete={handleDeleteArticle}
        />
      )}
    </div>
  );
};

export default ArticlesTable;
