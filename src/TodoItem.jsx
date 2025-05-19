import React from "react";
import { useTodoContext } from "./TodoContext";

const TodoItem = ({ todo }) => {
    const { toggleTodo, removeTodo } = useTodoContext();

    return (
        <li
            style={{
                textDecoration: todo.done ? "line-through" : "none",
                marginBottom: 8,
                cursor: "pointer",
            }}
            onClick={() => toggleTodo(todo.id)}
        >
            {todo.text}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    removeTodo(todo.id);
                }}
                style={{ marginLeft: 10 }}
            >
                Удалить
            </button>
        </li>
    );
};

export default TodoItem;
