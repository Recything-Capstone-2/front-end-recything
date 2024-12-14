import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../../utils/instance";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";

const PopularArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await instance.get("/articles");
        setArticles(response.data.data.items); // Pastikan mengambil `items`
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Terjadi kesalahan saat memuat artikel. Silakan coba lagi.");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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

  if (!Array.isArray(articles) || articles.length === 0) {
    return <div>Tidak ada artikel yang tersedia.</div>;
  }

  return (
    <section className="pt-16 pb-6 px-6 md:px-24 max-w-[1440px] dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Artikel Populer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Artikel Utama */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden">
          {articles.length > 0 && (
            <Link to={`/articles/${articles[0].id}`} className="block">
              <img
                src={articles[0].link_foto}
                alt={articles[0].judul}
                className="w-full h-1/2 object-cover"
              />
              <div className="p-4 px-0 h-1/2">
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  {formatDate(articles[0].created_at)}
                </p>
                <h3 className="text-xl md:text-3xl dark:text-white font-bold mt-2">
                  {articles[0].judul}
                </h3>
              </div>
            </Link>
          )}
        </div>

        {/* Artikel Samping (Maksimal 3 Artikel) */}
        <div className="flex flex-col space-y-4">
          {articles.slice(1, 4).map((article) => (
            <Link
              to={`/articles/${article.id}`}
              key={article.id}
              className="flex items-center bg-white dark:bg-gray-800 overflow-hidden"
            >
              <img
                src={article.link_foto}
                alt={article.judul}
                className="w-1/2 h-[180px] object-cover"
              />
              <div className="w-1/2 flex flex-col justify-center px-4">
                {" "}
                {/* Menengahkan konten secara vertikal */}
                <p className="text-gray-500 dark:text-gray-200 text-sm mb-2">
                  {formatDate(article.created_at)}
                </p>
                <h4 className="text-lg dark:text-white font-semibold">
                  {article.judul}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArticle;
