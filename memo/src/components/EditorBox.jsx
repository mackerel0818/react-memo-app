import React, { useRef, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { useTheme } from "../context/ThemeContext";
import { Navigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { call } from "../service/AppService";

export default function EditorBox() {
  const { darkMode } = useTheme();
  const editorRef = useRef();
  const [title, setTitle] = useState("");
  const [saved, setSaved] = useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation((newMemo) => call("/memos", "POST", newMemo), {
    onSuccess: () => {
      queryClient.invalidateQueries("/memos");
    },
  });

  const handleSave = () => {
    const markDownContent = editorRef.current.getInstance().getMarkdown();
    const newMemo = {
      title: title,
      content: markDownContent,
    };

    mutation.mutate(newMemo);
    setSaved(true);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  if (saved) {
    return <Navigate to="/notebooks/all" />;
  }

  return (
    <div className="flex flex-col w-full justify-between p-5 min-w-min dark:bg-gray-950 dark:text-white">
      <div className="flex justify-between">
        <div>
          <label className="mr-2" htmlFor={title}>
            제목 :
          </label>
          <input
            className="w-4/5 p-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none dark:text-black"
            type="text"
            placeholder="노트 제목"
            required
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button className="text-4xl" onClick={handleSave}>
          <AiOutlineCheckCircle />
        </button>
      </div>
      <Editor
        initialValue="새로운 노트를 작성해주세요."
        ref={editorRef}
        initialEditType="wysiwyg"
        previewStyle="vertical"
        height="92%"
        theme={darkMode === true && "dark"}
        usageStatistics={false}
        plugins={[colorSyntax]}
      />
    </div>
  );
}
