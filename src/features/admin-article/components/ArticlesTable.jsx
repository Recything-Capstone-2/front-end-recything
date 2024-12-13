import React, { useState, useEffect } from 'react';
import instance from '../../../utils/instance';
import AddArticle from './AddArticle';
import ArticleDetailModal from './ArticleDetailModal';  // Import the modal component

const ArticlesTable = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddArticleForm, setShowAddArticleForm] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await instance.get('/articles');
        setArticles(response.data.data.items);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Terjadi kesalahan saat memuat artikel. Silakan coba lagi.');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Function to truncate content to 17 words
  const truncateContent = (content) => {
    const words = content.split(' ');
    if (words.length > 10) {
      return words.slice(0, 17).join(' ') + '...';
    }
    return content;
  };

  const handleAddArticleClick = () => {
    setShowAddArticleForm(true);  // Show the AddArticle form
  };

  const handleCloseModal = () => {
    setShowAddArticleForm(false);  // Hide the AddArticle form
    setSelectedArticle(null);  // Close the Article Detail modal
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);  // Set selected article to show details
  };

  const handleDeleteArticle = async (id) => {
    try {
      await instance.delete(`/articles/${id}`);
      setArticles(articles.filter(article => article.id !== id)); // Remove article from state
      handleCloseModal(); // Close the modal after deletion
    } catch (err) {
      setError('Terjadi kesalahan saat menghapus artikel. Silakan coba lagi.');
    }
  };

  const handleEditArticle = (article) => {
    // Implement edit functionality here (open a form to edit the article)
    console.log('Edit Article:', article);
    handleCloseModal(); // Close the modal after clicking edit
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-16 px-80 bg-green-50 min-h-screen">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow overflow-hidden flex flex-col cursor-pointer"
            style={{ width: '487px', height: '354px' }}
            onClick={() => handleArticleClick(article)}  // Click to view details
          >
            <img
              src={article.link_foto || 'fallback-image-url.jpg'}
              alt={article.judul}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{article.judul}</h2>
              <p className="text-sm text-gray-600">{truncateContent(article.konten)}</p>
            </div>
          </div>
        ))}
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
