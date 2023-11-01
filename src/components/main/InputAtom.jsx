import React from "react";

const InputAtom = ({ title, setTitle }) => {
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <label htmlFor="titleInput">제목</label>
      <input id="titleInput" value={title} onChange={titleChangeHandler} />
    </div>
  );
};

export default InputAtom;
