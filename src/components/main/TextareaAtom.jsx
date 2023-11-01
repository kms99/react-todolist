import React from "react";

const TextareaAtom = ({ context, setContext }) => {
  const contextChangeHandler = (e) => {
    setContext(e.target.value);
  };
  return (
    <div>
      <label htmlFor="contentsText">내용</label>
      <textarea
        id="contentsText"
        value={context}
        onChange={contextChangeHandler}
      />
    </div>
  );
};

export default TextareaAtom;
