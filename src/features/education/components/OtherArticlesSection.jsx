import React, { useEffect, useState } from "react";
import instance from "../../../utils/instance";

const OtherArticlesSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await instance.get("/articles");
        setArticles(response.data.data); // Sesuaikan dengan struktur response API
        setLoading(false);
      } catch (error) {
        console.error("Gagal memuat artikel:", error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Artikel Lainnya</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg overflow-hidden"
          >
            <img
              src={article.link_foto}
              alt={article.judul}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">
                {formatDate(article.created_at)}
              </p>
              <h3 className="text-lg font-semibold mb-2">{article.judul}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {article.konten}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8">
        <nav className="flex space-x-2">
          <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
            &lt;
          </button>
          <button className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-800">
            1
          </button>
          <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
            &gt;
          </button>
        </nav>
      </div>
    </section>
  );
};

export default OtherArticlesSection;