import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../../utils/instance";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";

const OtherArticlesSection = () => {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  };

  const fetchArticles = async (page) => {
    setLoading(true);
    try {
      const response = await instance.get(`/articles?page=${page}`);
      setArticles(response.data.data.items);
      setPagination(response.data.data.pagination);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat memuat artikel. Silakan coba lagi.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.total_pages) {
      setCurrentPage(newPage);
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

  if (!Array.isArray(articles) || articles.length === 0) {
    return <div>Tidak ada artikel yang tersedia.</div>;
  }

  return (
    <section className="pt-16 pb-6 px-6 md:px-24 dark:bg-gray-800 max-w-[1440px]">
      <h2 className="text-2xl font-bold mb-10 dark:text-white">
        Artikel Lainnya
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            to={`/articles/${article.id}`}
            key={article.id}
            className="block bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={article.link_foto}
              alt={article.judul}
              className="w-full h-48 object-cover"
            />
            <div className="py-4">
              <p className="text-gray-500 dark:text-gray-200 text-sm">
                {formatDate(article.created_at)}
              </p>
              <h3 className="text-xl font-bold mt-2 dark:text-white">
                {article.judul}
              </h3>
              <p className="text-gray-700 dark:text-gray-500 mt-2">
                {truncateContent(article.konten, 20)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {pagination && (
        <nav
          aria-label="Page navigation example"
          className="mt-8 flex justify-center"
        >
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>

            {Array.from({ length: pagination.total_pages }, (_, index) => (
              <li key={index + 1}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight ${
                    currentPage === index + 1
                      ? "text-primary-05 border border-green-300 bg-primary-01"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination.total_pages}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
};

export default OtherArticlesSection;
