import React from "react";
import "./styles/index.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <TodoList />
        </div>
    );
}

export default App;