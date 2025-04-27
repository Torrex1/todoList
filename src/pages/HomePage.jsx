import '../styles/homePage.css'

import Header from '../components/Header.jsx'
import TodoForm from "../components/TodoForm/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";

export default function HomePage({onAdd ,todos, onToggle, onDelete}) {
    return (
        <>
            <div className='container'>
                <Header />
                <TodoForm
                    onAdd={onAdd}
                />

                <div className="container__todos">
                    <TodoList
                        todos={todos}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                </div>
            </div>
        </>
    )
}