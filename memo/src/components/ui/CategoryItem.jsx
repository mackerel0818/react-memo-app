import React from "react";
import { useNavigate } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { call } from "../../service/AppService";

export default function CategoryItem({ id, label }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (deletedCategory) => call("/categories", "DELETE", deletedCategory),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("/categories");
      },
    }
  );

  const handleDelete = () => {
    const deletedCategory = {
      id: id,
    };
    mutation.mutate(deletedCategory);
  };

  return (
    <div className="flex justify-between hover:cursor-pointer dark:text-white mb-2">
      <button
        onClick={() => {
          navigate(`/notebooks/${id}`, { state: { id } });
        }}
      >
        {label}
      </button>
      <button onClick={handleDelete}>
        <FiDelete />
      </button>
    </div>
  );
}
