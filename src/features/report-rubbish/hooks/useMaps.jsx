import { useState } from 'react';
import { mapsApi } from '../service/maps.api.js';

export default function useMaps() {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [position, setPosition] = useState([-6.200000, 106.816666]); // Default Jakarta

  // Mengambil saran alamat dari Nominatim
  const fetchSuggestions = async (input) => {
    try {
      const data = await mapsApi(input);
      setSuggestions(
        data.map((item) => ({
          label: item.title,
          value: { lat: item.position.lat, lon: item.position.lng },
        }))
      );
    } catch (error) {
      console.error('Gagal mengambil saran:', error);
    }
  };

  // Memproses perubahan input
  const handleInputChange = (event, { newValue }) => {
    setAddress(newValue);
    if (newValue.length > 3) {
      fetchSuggestions(newValue);
    } else {
      setSuggestions([]);
    }
  };

  // Memilih alamat dan memperbarui peta
  const handleSelect = (event, { suggestion }) => {
    setAddress(suggestion.label);
    setPosition([parseFloat(suggestion.value.lat), parseFloat(suggestion.value.lon)]);
  };

  const renderSuggestion = (suggestion) => (
    <div>{suggestion.label}</div>
  );

  const inputProps = {
    placeholder: 'Contoh: Jalan Sudirman',
    value: address,
    onChange: handleInputChange,
    className: 'w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10',
  };

  return { address, suggestions, position, handleSelect, renderSuggestion, inputProps, fetchSuggestions, setSuggestions };
}
