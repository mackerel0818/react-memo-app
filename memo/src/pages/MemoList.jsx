import React from "react";
import Sidebar from "../components/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { call } from "../service/AppService";
import ContentsViewer from "../components/ContentsViewer";
import { useNavigate } from "react-router-dom";

export default function MemoList() {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: memos,
  } = useQuery(["memos"], async () => {
    const response = await call("/memos", "GET");
    return response.data;
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full dark:bg-gray-950 p-4 h-screen overflow-auto">
        {isLoading && <p>Loading memos...</p>}
        {error && <p>Error: {error.message}</p>}
        {memos && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {memos.map((memo) => (
              <button
                onClick={() => {
                  navigate(`/note/${memo.id}`, { state: { memo } }); // 클릭 시 페이지 이동
                }}
                className="text-left"
                key={memo.id}
              >
                <li className="dark:text-white">
                  <div className="bg-white dark:bg-gray-800 dark:shadow-gray-700 rounded-md shadow-md sh p-4 h-48 overflow-hidden">
                    <h3 className="text-lg font-semibold">
                      제목 : {memo.title ? memo.title : "무제"}
                    </h3>
                    <ContentsViewer contents={memo.content} />
                  </div>
                </li>
              </button>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
