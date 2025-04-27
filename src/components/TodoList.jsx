import TodoItem from "./TodoItem/TodoItem.jsx";

export default function TodoList ({todos}) {
    return (
        todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
            />
        ))
    )
}