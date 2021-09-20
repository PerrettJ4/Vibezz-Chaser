import "./index.css";
import React, { useState } from "react";
// import Button from "../Button";
// import { Link } from "react-router-dom";

export default function Input({ submit }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  submit(text);
  console.log(text);

  return (
    <main className="form">
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="Search for a band..."
      />
    </main>
  );
}
