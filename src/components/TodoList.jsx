import TodoItem from "./TodoItem/TodoItem.jsx";

export default function TodoList ({todos, onToggle, onDelete}) {
    return (
        todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
            />
        ))
    )
}