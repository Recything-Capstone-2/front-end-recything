import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instance from '../../../utils/instance';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch article detail
  const fetchArticle = async () => {
    try {
      const response = await instance.get(`/articles/${id}`);
      setArticle(response.data.data);
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat memuat detail artikel.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch related articles
  const fetchRelatedArticles = async () => {
    try {
      const response = await instance.get('/articles');
      const articles = response.data.data.items;
      const filteredArticles = articles
        .filter((item) => item.id !== id) // Exclude the current article
        .slice(0, 3); // Get the latest 3 articles
      setRelatedArticles(filteredArticles);
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat memuat artikel lainnya.');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchArticle();
    fetchRelatedArticles();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>Artikel tidak ditemukan.</div>;
  }

  return (

    <div>

        <div className='p-6'>
          {/* Back Button */}
          <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-500 hover:text-blue-700 mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        </div>
    <section className="p-32">


      {/* Article Content */}
      <h1 className="text-3xl font-bold">{article.judul}</h1>
      <p className="text-gray-500 text-sm mt-2">{article.created_at}</p>
      <div className="flex items-center justify-center mt-4">
        <img
          src={article.link_foto}
          alt={article.judul}
          className="w-1/2 h-1/3 object-cover"
        />
      </div>
      <p className="text-gray-700 mt-6">{article.konten}</p>

      {/* Related Articles Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Artikel Lainnya</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((relatedArticle) => (
            <div
              key={relatedArticle.id}
              className="bg-white overflow-hidden cursor-pointer"
              onClick={() => navigate(`/articles/${relatedArticle.id}`)} // Navigate to ArticleDetail
            >
              <img
                src={relatedArticle.link_foto}
                alt={relatedArticle.judul}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{relatedArticle.judul}</h3>
                <p className="text-gray-500 text-sm mt-2">{relatedArticle.created_at}</p>
                <p className="text-gray-700 mt-2">
                  {relatedArticle.konten.split(' ').slice(0, 15).join(' ')}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
    </div>
  );
};

export default ArticleDetail;
