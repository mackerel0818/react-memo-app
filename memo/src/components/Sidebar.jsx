import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import CategoryItem from "./ui/CategoryItem";

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  const handleUser = () => {
    setShowModal(true);
  };

  return (
    <div className="dark:bg-gray-950">
      <div
        id="sidebar"
        className="flex flex-col w-64 h-screen rounded-r-3xl bg-white dark:bg-gray-900 p-4 shrink-0"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="m-2">
            <input
              type="search"
              placeholder="🔍 search"
              className="w-full p-2 mb-4 bg-gray-100 dark:text-white rounded"
            />
            <div className="flex flex-col">
              <CategoryItem label="📒 전체 노트" />
            </div>
          </div>
          <div className="flex justify-between text-3xl m-2 items-center">
            <Link to="/note/add">
              <AiOutlinePlus className="dark:text-white" />
            </Link>
            <button onClick={handleUser}>
              <BiUserCircle className="dark:text-white" />
            </button>
            {showModal ? <UserInfo setShowModal={setShowModal} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
