import React, { useEffect, useState } from 'react';
import instance from '../../../utils/instance';

const OtherArticlesSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await instance.get('/articles');
        setArticles(response.data.data.items); // Pastikan mengambil `items`
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Terjadi kesalahan saat memuat artikel. Silakan coba lagi.');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!Array.isArray(articles) || articles.length === 0) {
    return <div>Tidak ada artikel yang tersedia.</div>;
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Artikel Lainnya</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden">
            <img
              src={article.link_foto}
              alt={article.judul}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">
                {formatDate(article.created_at)}
              </p>
              <h3 className="text-xl font-bold mt-2">{article.judul}</h3>
              <p className="text-gray-700 mt-2">{article.konten}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherArticlesSection;
