import React from "react";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { useTheme } from "../context/ThemeContext";

export default function ContentsViewer({ contents }) {
  const { darkMode } = useTheme();
  return (
    <Viewer
      initialValue={contents || ""}
      theme={darkMode ? "dark" : "default"}
    />
  );
}
