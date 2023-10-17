import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({ label }) {
  return (
    <div className="hover:cursor-pointer dark:text-white">
      <Link to="/notebooks/all">{label}</Link>
    </div>
  );
}
