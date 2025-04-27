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
    return (
        <HomePage />
        <HomePage
            onAdd={addTodo}
            todos={todos}
        />
    )
}