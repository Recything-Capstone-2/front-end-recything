import { useState, useEffect } from "react";
import instance from "../../../utils/instance";

const useFetchUsers = (page) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await instance.get(`/admin/users?page=${page}`);
        if (response.status === 200) {
          setUsers(response.data.data.data.items);
          setPagination(response.data.data.data.pagination);
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
  }, [page]);

  return { users, loading, error, pagination };
};

export default useFetchUsers;
