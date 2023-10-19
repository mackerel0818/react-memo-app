import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import CategoryItem from "./ui/CategoryItem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { call } from "../service/AppService";
import Search from "./Search";

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery(["categories"], async () => {
    const response = await call("/categories", "GET");
    return response.data;
  });

  const handleUser = () => {
    setShowModal(true);
  };

  const queryClient = useQueryClient();

  const categoryMutation = useMutation(
    (newCategory) => call("/categories", "POST", newCategory),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("/categories");
      },
    }
  );

  const addCategory = () => {
    if (newCategory.trim() !== "") {
      if (
        categories &&
        !categories.some((category) => category.name === newCategory)
      ) {
        categoryMutation.mutate({ name: newCategory });
        setNewCategory("");
      } else {
        alert("이미 존재하는 카테고리입니다.");
        setNewCategory("");
      }
    }
  };

  return (
    <div className="dark:bg-gray-950">
      <div
        id="sidebar"
        className="flex flex-col w-64 h-screen rounded-r-3xl border bg-white dark:border-gray-900 dark:bg-gray-900 p-4 shrink-0"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="m-2">
            <Search />
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  placeholder="새 카테고리"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full p-2 mr-2 bg-gray-100 dark:text-black rounded"
                />
                <button onClick={addCategory}>
                  <AiOutlinePlus className="dark:text-white" />
                </button>
              </div>
              <CategoryItem key="all" id="all" label="📒 전체 노트" />
              {isLoading && <p>Loading memos...</p>}
              {error && <p>Error: {error.message}</p>}
              {categories &&
                categories.map((category) => {
                  return (
                    <CategoryItem
                      key={category.id}
                      id={category.id}
                      label={`📒 ${category.name}`}
                    />
                  );
                })}
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
