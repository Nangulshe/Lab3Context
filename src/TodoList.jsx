import React from "react";
import { useTodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todos } = useTodoContext();

    if (todos.length === 0) return <p>Задач пока нет</p>;

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
