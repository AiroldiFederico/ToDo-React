import React, { useState } from "react";

export default function CreateTask({ onAddTask }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputText) {
      onAddTask(inputText);
      setInputText(""); // Resetta l'input dopo l'invio
    }
  };

  return (
    <input
      type="text"
      className="block w-full h-10 pl-1 mb-6 rounded drop-shadow bg-white text-slate-800 font-semibold leading-9 indent-3 ring-inset focus:outline-none placeholder:text-slate-400"
      placeholder="ToDo?"
      value={inputText}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
}
