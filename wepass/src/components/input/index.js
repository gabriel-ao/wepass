import React from "react";
export default function input({ placeholder, value, onChange, type = "text" }) {
  return (
    <div className="">
      <input
        type={type}
        id="fname"
        placeholder={placeholder}
        value={value}
        name="fname"
        onChange={onChange}
      ></input>
    </div>
  );
}
