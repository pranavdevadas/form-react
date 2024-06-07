import React, { useState, useRef } from 'react';

export default function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Name is required");
      inputRef.current.focus();
    } else {
      console.log("Submitted name:", name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label><br /><br />
      <input
        type="text"
        value={name}
        onChange={handleChange}
        ref={inputRef}
      /> <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
