import { useState, useEffect } from "react";
import instance from "../../../utils/instance";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await instance.get("/admin/users");
        if (response.status === 200) {
          setUsers(response.data.data);
        } else {
          setError(response.data.meta.message || "Terjadi kesalahan.");
        }
      } catch (err) {
        setError("Gagal memuat data. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useFetchUsers;
