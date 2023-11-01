import React, { useState } from "react";
import Button from "../common/Button";

const Card = ({ id, title, context, isDone, setTodoItem, todoItem }) => {
  const doneCheckHandler = (e) => {
    const filterArray = todoItem.filter((item) => {
      return item.id !== id;
    });
    const newArray = [
      ...filterArray,
      {
        id,
        title,
        context,
        isDone: e.target.checked,
      },
    ];
    setTodoItem(newArray);
  };

  const cardDeleteHandler = () => {
    const filterArray = todoItem.filter((item) => {
      return item.id !== id;
    });
    setTodoItem(filterArray);
  };

  const [modifyMode, setModifyMode] = useState(false);
  const [modifyTitleValue, setModifyTitleValue] = useState(title);
  const [modifyContextValue, setModifyContextValue] = useState(context);
  const modifyBtnClickHandler = () => {
    setModifyMode(true);
  };
  const modifyDoneBtnClickHandler = () => {
    setModifyMode(false);
    const filterArray = todoItem.filter((item) => item.id !== id);
    const newArray = [
      ...filterArray,
      {
        id,
        title: modifyTitleValue,
        context: modifyContextValue,
        isDone,
      },
    ];
    setTodoItem(newArray);
  };

  return (
    <div className={`todo-card ${isDone ? "done" : ""}`}>
      {!modifyMode ? (
        <div className="todo-card__title">{title}</div>
      ) : (
        <input
          value={modifyTitleValue}
          className="modify-title"
          onChange={(e) => {
            setModifyTitleValue(e.target.value);
          }}
        />
      )}
      {!modifyMode ? (
        <p className="todo-card__context">{context}</p>
      ) : (
        <textarea
          value={modifyContextValue}
          className="modify-context"
          onChange={(e) => {
            setModifyContextValue(e.target.value);
          }}
        />
      )}
      <div className="todo-card__done-checked">
        <span>isDone?</span>
        <input
          className="todo-card__checkbox"
          type="checkbox"
          checked={isDone}
          onChange={doneCheckHandler}
        />
      </div>
      <div className="todo-card__buttons">
        {modifyMode ? (
          <Button text="완료" clickEventHandler={modifyDoneBtnClickHandler} />
        ) : (
          <Button text="수정" clickEventHandler={modifyBtnClickHandler} />
        )}
        <Button text="삭제" clickEventHandler={cardDeleteHandler} />
      </div>
    </div>
  );
};

export default Card;
