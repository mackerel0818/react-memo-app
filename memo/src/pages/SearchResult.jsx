// SearchResults.js
import React from "react";
import { useLocation } from "react-router-dom";
import MemoList from "./MemoList";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  return (
    <div>
      <MemoList query={query} />
    </div>
  );
}
