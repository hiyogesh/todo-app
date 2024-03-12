import React, { useState } from "react";
import styles from "../styles/Input.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { useTodosContext } from "../context/TodosContext";
function InputTodo() {
  const { addTodoItem } = useTodosContext();
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add item");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.ip}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />

        <button className="input-submit">
          <FaPlusCircle />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
}

export default InputTodo;
