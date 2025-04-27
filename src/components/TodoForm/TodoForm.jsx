import './todoform.css'
import {useState} from "react";

export default function TodoForm ({onAdd}) {
    const [text, setText] = useState('')
    const [deadline, setDeadline] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() && deadline.trim()) {
            onAdd(text, deadline)
            setText('')
            setDeadline('')
        }
    }

    return (
        <form className="form-todo" onSubmit={handleSubmit}>
            <div className="todo-task">
                <input
                    className='todo-task__text'
                    type="text"
                    placeholder="Что нужно сделать?"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

                <button type='submit'>
                    Добавить
                </button>
            </div>

            <div className="todo-deadline">
                <input
                    type="text"
                    placeholder="dd.mm"
                    value={deadline}
                    onChange={e => setDeadline(e.target.value)}
                />
            </div>
        </form>
    )
}