import { useState, useEffect } from "react";
import instance from "../../../utils/instance.js";

const DEFAULT_IMAGE_URL = "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg";

export default function useDetailUser(userId) {
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchDataUserById = async (id) => {
      setLoading(true);
      try {
        const response = await instance.get(`/admin/users/${id}`);
        const dataUser = response?.data?.data;
        const dataReport = response?.data?.data?.reports || [];

        setUser(dataUser || null);
        setReports(dataReport || []);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Gagal mengambil data. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchDataUserById(userId);
  }, [userId]);

  return { user, reports, error, loading, defaultImageUrl: DEFAULT_IMAGE_URL };
}
