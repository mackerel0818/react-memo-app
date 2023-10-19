import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="flex items-center mb-2">
      <input
        type="search"
        placeholder="search"
        className="w-full p-2 mr-2 bg-gray-100 dark:text-black rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <AiOutlineSearch className="dark:text-white" />
      </button>
    </div>
  );
}
