import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../../../utils/instance";
import { FaArrowLeft } from "react-icons/fa";
import { formatDate } from "../../../utils/formatdate";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";

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
      setError("Terjadi kesalahan saat memuat detail artikel.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch related articles
  const fetchRelatedArticles = async () => {
    try {
      const response = await instance.get("/articles");
      const articles = response.data.data.items;
      const filteredArticles = articles
        .filter((item) => item.id !== id)
        .slice(0, 3);
      setRelatedArticles(filteredArticles);
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat memuat artikel lainnya.");
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchArticle();
    fetchRelatedArticles();
  }, [id]);

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

  if (!article) {
    return <div>Artikel tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-[1440px] px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-20 dark:bg-gray-800">
      {/* Back Button */}
      <button
        className="flex items-center space-x-2 mb-6 hover:bg-slate-200 dark:hover:bg-slate-500 px-2 py-2 rounded"
        onClick={() => window.history.back()}
      >
        <FaArrowLeft size={24} className="dark:text-white" />
      </button>

      <section>
        {/* Article Content */}
        <div className="text-center md:text-left mb-10 md:px-20">
          <h1 className="text-3xl md:text-4xl font-semibold dark:text-white">
            {article.judul}
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start pt-4">
            <p className="text-gray-500 text-sm dark:text-gray-200 mb-2 md:mb-0">
              {formatDate(article.created_at)}
            </p>
            <p className="text-gray-500 text-sm dark:text-gray-200 underline">
              {article.author}
            </p>
          </div>
        </div>

        {/* Article Video (YouTube Embed) */}
        <div className="flex items-center justify-center mt-4">
          {article.link_video ? (
            <div className="w-full max-h-[500px]">
              <iframe
                className="w-full h-[300px] md:h-[500px]"
                src={article.link_video.replace("watch?v=", "embed/")}
                title={article.judul}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              src={article.link_foto}
              alt={article.judul}
              className="w-full max-h-[300px] md:max-h-[500px] object-cover"
            />
          )}
        </div>

        {/* Article Content */}
        <p className="text-gray-700 dark:text-gray-300 mt-6 md:px-20 text-justify">
          {article.konten}
        </p>

        {/* Related Articles Section */}
        <section className="mt-12 md:px-20">
          <h2 className="text-2xl font-bold mb-6 dark:text-white text-center md:text-left">
            Artikel Lainnya
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.id}
                className="bg-white dark:bg-gray-800 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => navigate(`/articles/${relatedArticle.id}`)}
              >
                <img
                  src={relatedArticle.link_foto}
                  alt={relatedArticle.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold dark:text-white">
                    {relatedArticle.judul}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-200 text-sm mt-2">
                    {formatDate(relatedArticle.created_at)}
                  </p>
                  <p className="text-gray-700 dark:text-gray-500 mt-2">
                    {relatedArticle.konten.split(" ").slice(0, 15).join(" ")}...
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
