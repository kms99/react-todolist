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
        id: Date.now(),
        title,
        context,
        isDone: false,
      },
    ];
    localStorage.setItem("todo", JSON.stringify(newTodoItem));
    setTodoItem(newTodoItem);
    setTitle("");
    setContext("");
  };

  return (
    <div className="input-field-container">
      <h2 className="input-field-container__title">오늘 할일을 기록하세요</h2>
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
