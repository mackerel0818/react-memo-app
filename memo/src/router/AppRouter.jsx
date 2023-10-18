import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import MemoList from "../pages/MemoList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AddMemo from "../pages/AddMemo";
import MemoDetail from "../pages/MemoDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/note/add" element={<AddMemo />} />
        <Route path="/note/:id" element={<MemoDetail />} />
        <Route path="/notebooks/all" element={<MemoList />} />
        <Route path="/notebooks/:id" element={<MemoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
