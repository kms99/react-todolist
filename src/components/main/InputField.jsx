import React, { useState } from "react";
import InputAtom from "./InputAtom";
import InputButtonAtom from "./InputButtonAtom";
import TextareaAtom from "./TextareaAtom";
import "./main.css";
const InputField = ({ todoItem, setTodoItem }) => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const addTodoEventHandler = (e) => {
    e.preventDefault();
    const newTodoItem = [
      ...todoItem,
      {
        id: todoItem.length + 1,
        title,
        context,
        isDone: false,
      },
    ];
    setTodoItem(newTodoItem);
    setTitle("");
    setContext("");
  };

  return (
    <div className="input-field-container">
      <form className="input-field" onSubmit={addTodoEventHandler}>
        <div className="input-field__input-area">
          <InputAtom title={title} setTitle={setTitle} />
          <TextareaAtom context={context} setContext={setContext} />
        </div>
        <InputButtonAtom />
      </form>
    </div>
  );
};

export default InputField;
