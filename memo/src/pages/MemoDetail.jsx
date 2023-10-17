import React from "react";
import Sidebar from "../components/Sidebar";
import ContentsViewer from "../components/ContentsViewer";
import { GoTrash } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { call } from "../service/AppService";

export default function MemoDetail() {
  const { memo } = useLocation().state;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(
    (deletedMemo) => call("/memos", "DELETE", deletedMemo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("/memos");
        navigate("/notebooks/all");
      },
    }
  );

  const handleClick = () => {
    const deletedMemo = {
      id: memo.id,
    };
    mutation.mutate(deletedMemo);
  };

  return (
    <div className="flex h-screen dark:bg-gray-950 dark:text-white">
      <Sidebar />
      <div className="w-full m-5 p-5 dark:border-gray-800 border-2 rounded-lg overflow-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">
            제목 : {memo.title ? memo.title : "무제"}
          </h3>
          <button onClick={handleClick}>
            <GoTrash className="text-2xl hover:rotate-12" />
          </button>
        </div>
        <ContentsViewer contents={memo.content} />
      </div>
    </div>
  );
}
