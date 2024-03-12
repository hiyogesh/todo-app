import React, { useState } from "react";
import styles from "../styles/TodoItem.module.css";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosContext } from "../context/TodosContext";

function TodoItem({ item }) {
  const [editing, setEditing] = useState(false);
  const { handleChange, delTodo, setUpdate } = useTodosContext();
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  const handleEditing = () => {
    setEditing(true);
    console.log(editing);
  };
  const handleUpdateDone = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            handleChange(item.id);
          }}
        />

        <span style={item.completed ? completedStyle : null}>{item.title}</span>
        <button onClick={handleEditing} className={styles.move}>
          <AiFillEdit />
        </button>
        <button
          onClick={() => {
            delTodo(item.id);
          }}
          className={styles.move}
        >
          <FaTrash />
        </button>
      </div>

      <input
        type="text"
        value={item.title}
        style={editMode}
        className={styles.textInput}
        onChange={(e) => setUpdate(e.target.value, item.id)}
        onKeyDown={handleUpdateDone}
      ></input>
    </li>
  );
}

export default TodoItem;
