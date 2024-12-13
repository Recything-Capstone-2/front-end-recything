import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instance from '../../../utils/instance';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await instance.get(`/articles/${id}`);
        setArticle(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Terjadi kesalahan saat memuat detail artikel.');
        setLoading(false);
      }
    };

    fetchArticle();
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
    <section className="p-8">
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
        Back
      </button>

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
    </section>
  );
};

export default ArticleDetail;
