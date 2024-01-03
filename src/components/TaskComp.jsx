import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function TaskComp({ children, id, check, onToggle, onRemove }) {
  return (
    <div
      className={`flex justify-between items-center ${
        !check
          ? "rounded drop-shadow h-10 bg-white text-slate-800"
          : "rounded shadow-inner h-10 bg-gray-100 text-slate-400 line-through"
      } text-left font-semibold leading-9 indent-3 mb-1 cursor-pointer`}
      id={id}
    >
      <span onClick={onToggle} className="flex-grow">
        {children}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="mr-2 text-grey-900 hover:text-red-700"
      >
        <FontAwesomeIcon icon={faXmark} className="text-red-500 text-xl" />
      </button>
    </div>
  );
}
