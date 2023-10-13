import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import MultiLevelSidebar from "./ui/CategoryItem";
import UserInfo from "./UserInfo";

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  const handleUser = () => {
    setShowModal(true);
  };

  return (
    <div
      id="sidebar"
      className="flex flex-col w-64 h-screen border-r-2 rounded-r-3xl bg-white dark:bg-gray-800 p-4"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="m-2">
          <input
            type="search"
            placeholder="🔍 search"
            className="w-full p-2 mb-4 bg-gray-100 dark:bg-gray-700 dark:text-white rounded"
          />
          <div className="flex flex-col">
            <MultiLevelSidebar name="📒 전체 노트" />
          </div>
        </div>
        <div className="flex justify-between text-3xl m-2 items-center">
          <button>
            <AiOutlinePlus className="dark:text-white" />
          </button>
          <button onClick={handleUser}>
            <BiUserCircle className="dark:text-white" />
          </button>
          {showModal ? <UserInfo setShowModal={setShowModal} /> : null}
        </div>
      </div>
    </div>
  );
}
