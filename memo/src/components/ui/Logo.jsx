import React from "react";
import { PiNotebook } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <nav className="w-52">
      <Link to="/" className="flex items-center m-2">
        <PiNotebook className="text-4xl mr-2 pt-1" />
        <h1 className="text-4xl font-extralight font-['Poppins']">Bethink</h1>
      </Link>
    </nav>
  );
}
