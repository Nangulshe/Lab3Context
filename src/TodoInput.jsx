import React, { useState } from "react";
import { useTodoContext } from "./TodoContext";

const TodoInput = () => {
    const { addTodo } = useTodoContext();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        addTodo(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Новая задача..."
                style={{ padding: "8px", width: "70%", marginRight: "10px" }}
            />
            <button type="submit" style={{ padding: "8px 16px" }}>
                Добавить
            </button>
        </form>
    );
};

export default TodoInput;
