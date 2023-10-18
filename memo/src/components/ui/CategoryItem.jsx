import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryItem({ id, label }) {
  const navigate = useNavigate();
  return (
    <div className="hover:cursor-pointer dark:text-white mb-2">
      <button
        onClick={() => {
          navigate(`/notebooks/${id}`, { state: { id } });
        }}
      >
        {label}
      </button>
    </div>
  );
}
