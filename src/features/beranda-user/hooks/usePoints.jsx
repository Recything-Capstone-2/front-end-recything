import { useState, useEffect } from "react";
import instance from "../../../utils/instance";

const usePoints = () => {
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const response = await instance.get("/users/points");
        console.log("Data poin berhasil diambil:", response.data);
        setPoints(response.data.data.points);
      } catch (error) {
        setError(error);
        console.error("Gagal mengambil data poin:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPoints();
  }, []);

  return { points, loading, error };
};

export default usePoints;
