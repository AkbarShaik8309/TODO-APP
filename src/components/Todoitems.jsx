import React from "react";
import tick from "../assets/tick.png";
import non_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img 
          onClick={() => toggle(id)}
          src={isComplete ? tick : non_tick}
          alt=""
          className="w-7"
        />
        <p className={`ml-4 text-[17px] ${isComplete ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        className="w-5 cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default TodoItems;
