import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todo, setTodo] = useState(
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodo((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodo((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="w-11/12 max-w-md bg-white flex flex-col p-7 place-self-center min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">ToDo List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
      <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-orange-300 hover:bg-orange-500"
        >
          ADD
        </button>
      </div>
      <div>
        {todo.map((item, index) => (
          <TodoItems
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
