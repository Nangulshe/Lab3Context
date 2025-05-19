import React from "react";
import { TodoProvider } from "./TodoContext";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
    return (
        <TodoProvider>
            <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
                <h1>To-Do List</h1>
                <TodoInput />
                <TodoList />
            </div>
        </TodoProvider>
    );
};

export default App;
