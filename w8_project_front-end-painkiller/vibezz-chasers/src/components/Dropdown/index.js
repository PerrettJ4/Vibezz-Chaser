// import { useState } from "react";
import "./index.css";

export default function Dropdown({ submit }) {
  function handleChange(e) {
    submit(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <select onChange={handleChange} name="cities" id="cities">
        <option value="Birmingham">Birmingham</option>
        <option value="Manchester">Manchester</option>
        <option value="Edinburgh">Edinburgh</option>
        <option value="London">London</option>
      </select>
    </>
  );
}
