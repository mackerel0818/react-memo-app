import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { call } from "../service/AppService";
import ContentsViewer from "../components/ContentsViewer";
import { useLocation, useNavigate } from "react-router-dom";

export default function MemoList({ query }) {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state && location.state.id;
  const url = id === "all" || id === null ? "/memos" : `/memos/${id}`;

  const {
    isLoading,
    error,
    data: memos,
    refetch,
  } = useQuery(["memos", url], async () => {
    const response = await call(url, "GET");
    return response.data;
  });

  useEffect(() => {
    refetch();
  }, [id, query, refetch, memos]);

  const filteredMemos = query
    ? memos.filter(
        (memo) => memo.title.includes(query) || memo.content.includes(query)
      )
    : memos;

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full dark:bg-gray-950 p-4 h-screen overflow-auto">
        {isLoading && <p>Loading memos...</p>}
        {error && <p>Error: {error.message}</p>}
        {filteredMemos && filteredMemos.length !== 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMemos.map((memo) => (
              <button
                onClick={() => {
                  navigate(`/note/${memo.id}`, { state: { memo } });
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
        ) : (
          <p className="text-xl pt-5 dark:text-white">
            ❌❌❌노트가 없습니다!❌❌❌
          </p>
        )}
      </div>
    </div>
  );
}
