import React from "react";
import Sidebar from "../components/Sidebar";
import EditorBox from "../components/EditorBox";

export default function AddMemo() {
  return (
    <div className="flex">
      <Sidebar />
      <EditorBox />
    </div>
  );
}
