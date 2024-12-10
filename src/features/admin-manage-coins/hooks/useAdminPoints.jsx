import { useEffect, useState } from "react";
import instance from "../../../utils/instance.js";
import { showAlert } from "../../../components/share/Alert.jsx";

export default function useAdminPoints() {
  const [points, setPoints] = useState([]);
  const [userCoins, setUserCoins] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAccept, setLoadingAccept] = useState(false);

  const fetchGetPoints = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/admin/users/points");
      const data = response?.data.data || [];
      setPoints(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Gagal mengambil data. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleCoinsChange = (e, userId) => {
    setUserCoins((prev) => ({
      ...prev,
      [userId]: e.target.value,
    }));
  };

  const handleAcceptCoins = async (userId) => {
    const coins = parseInt(userCoins[userId]);

    const data = {
      user_id: userId,
      points: coins,
    };

    setLoadingAccept(true);
    try {
      const res = await instance.post("/admin/users/points/deduct", data);
      if (res.status === 200) {
        showAlert({
          icon: "success",
          title: "Berhasil",
          text: "Koin berhasil ditukar",
        });
        fetchGetPoints();
      } else {
        setError("Gagal menukar koin. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error accepting coins:", error);
    } finally {
      setLoadingAccept(false);
    }
  };

  useEffect(() => {
    fetchGetPoints();
  }, []);

  return {
    points,
    userCoins,
    loading,
    loadingAccept,
    error,
    handleCoinsChange,
    handleAcceptCoins,
  };
}