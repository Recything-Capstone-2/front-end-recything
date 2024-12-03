import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY_MAPS

export const mapsApi = async (input) => {
  try {
    const response = await axios.get("https://geocode.search.hereapi.com/v1/geocode", {
      params: {
        q: `${input}, Jakarta`,
        apiKey: API_KEY,
        limit: 5,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Gagal mengambil saran:", error);
    return [];
  }
};