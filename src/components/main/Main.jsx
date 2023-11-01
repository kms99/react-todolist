import React, { useState } from "react";
import InputField from "./InputField";
import Card from "./Card";

const Main = () => {
  const [todoItem, setTodoItem] = useState([]);
  return (
    <div>
      <InputField todoItem={todoItem} setTodoItem={setTodoItem} />
      <div className="card-list-wrapper">
        <h2>해야할 목록</h2>
        {todoItem.filter((item) => {
          return item.isDone === false;
        }).length !== 0 ? (
          <div className="card-list-container">
            {todoItem
              .filter((item) => {
                return item.isDone === false;
              })
              .map((item) => {
                return (
                  <Card
                    key={item["id"]}
                    id={item["id"]}
                    title={item["title"]}
                    context={item["context"]}
                    isDone={item["isDone"]}
                    todoItem={todoItem}
                    setTodoItem={setTodoItem}
                  />
                );
              })}
          </div>
        ) : (
          <span>목록이 없습니다.</span>
        )}
      </div>
      <div className="card-list-wrapper">
        <h2>끝난 목록</h2>
        {todoItem.filter((item) => {
          return item.isDone === true;
        }).length !== 0 ? (
          <div className="card-list-container">
            {todoItem
              .filter((item) => {
                return item.isDone === true;
              })
              .map((item) => {
                return (
                  <Card
                    key={item["id"]}
                    id={item["id"]}
                    title={item["title"]}
                    context={item["context"]}
                    isDone={item["isDone"]}
                    todoItem={todoItem}
                    setTodoItem={setTodoItem}
                  />
                );
              })}
          </div>
        ) : (
          <span>목록이 없습니다.</span>
        )}
      </div>
    </div>
  );
};

export default Main;
