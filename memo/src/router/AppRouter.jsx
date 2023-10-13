import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import MemoDetail from "../pages/MemoDetail";
import MemoList from "../pages/MemoList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notebooks/all" element={<MemoList />} />
        <Route path="/note/:id" element={<MemoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
