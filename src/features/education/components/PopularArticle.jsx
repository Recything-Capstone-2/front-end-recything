import React, { useEffect, useState } from 'react';
import instance from '../../../utils/instance';

const PopularArticle = () => {
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
      <h2 className="text-2xl font-bold mb-6">Artikel Populer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Artikel Utama */}
        <div className="col-span-2">
          {articles.length > 0 && (
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={articles[0].link_foto}
                alt={articles[0].judul}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-500 text-sm">
                  {formatDate(articles[0].created_at)}
                </p>
                <h3 className="text-xl font-bold mt-2">{articles[0].judul}</h3>
                <p className="text-gray-700 mt-2">{articles[0].konten}</p>
              </div>
            </div>
          )}
        </div>

        {/* Artikel Samping */}
        <div className="flex flex-col space-y-4">
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="flex items-start space-x-4 bg-white rounded-lg overflow-hidden"
            >
              <img
                src={article.link_foto}
                alt={article.judul}
                className="w-24 h-24 object-cover"
              />
              <div>
                <p className="text-gray-500 text-sm">
                  {formatDate(article.created_at)}
                </p>
                <h4 className="text-lg font-semibold">{article.judul}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArticle;
