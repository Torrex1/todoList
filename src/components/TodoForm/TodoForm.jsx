import './todoform.css'

export default function TodoForm () {
    return (
        <form className="form-todo">
            <div className="todo-task">
                <input
                    className='todo-task__text'
                    type="text"
                    placeholder="Что нужно сделать?"
                />

                <button type='submit'>
                    Добавить
                </button>
            </div>

            <div className="todo-deadline">
                <input
                    type="text"
                    placeholder="dd.mm"
                />
            </div>
        </form>
    )
}