import HomePage from './pages/HomePage.jsx'

import { useState } from "react";

export default function App () {
    const [todos, setTodos] = useState([])

    const addTodo = (text, deadline) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            deadline: deadline,
            completed: false
        }
        setTodos([newTodo, ...todos]); //todo поменять местами
        console.log(newTodo);
    }

    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const onToggle = (id) => {
        setTodos(todos.map((todo) => todo.id === id ?
            {...todo, completed: !todo.completed} : todo));
    }

    return (
        <HomePage
            onAdd={addTodo}
            todos={todos}
            onToggle={onToggle}
            onDelete={onDelete}
        />
    )
}