import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("desc");

  const changeFilter = (newFilter) => {
    if (newFilter === "asc" || newFilter === "desc") {
      setFilter(newFilter);
    } else {
      console.error("Filter tidak valid:", newFilter);
    }
  };

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
