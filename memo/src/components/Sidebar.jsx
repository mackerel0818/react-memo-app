import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar() {
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
            className="w-full p-2 mb-4 bg-gray-100 dark:bg-gray-700 rounded"
          />
          <div className="flex flex-col">
            <Link to="/notebooks" className="font-semibold py-2">
              📒 전체 노트
            </Link>
            <Link to="/notebooks" className="font-semibold py-2">
              📒 중요한 노트
            </Link>
            <Link to="/notebooks" className="font-semibold py-2">
              📒 강의 노트
            </Link>
            <Link to="/notebooks" className="font-semibold py-2">
              📒 간단 메모
            </Link>
            <Link to="/notebooks" className="font-semibold py-2">
              📒 아이디어
            </Link>
          </div>
        </div>
        <div className="flex justify-between text-3xl m-2 items-center">
          <button>
            <AiOutlinePlus />
          </button>
          <button>
            <BiUserCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
