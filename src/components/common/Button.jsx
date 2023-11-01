import React from "react";

const Button = ({ text, clickEventHandler }) => {
  return (
    <>
      <button className="common-btn" onClick={clickEventHandler}>
        {text}
      </button>
    </>
  );
};

export default Button;
