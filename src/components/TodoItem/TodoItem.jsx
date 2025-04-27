import './todoitem.css'

export default function TodoItem ({todo, onToggle, onDelete}) {
    return (
        <div className='todo-item'>
            <div className='todo-item__deadline'>
                <span>{todo.deadline}</span>
            </div>

            <div className='todo-item__text'>
                <div>{todo.text}</div>
            </div>

            <div className='todo-item__icons'>
                <div onClick={() => onToggle(todo.id)}>
                    <img style={todo.completed === false? {display: 'block'} : {display: 'none'}} src="src/assets/icons/uncompleteIcon.svg" alt="uncompleteIcon"/>
                    <img style={todo.completed ? {display: 'block'} : {display: 'none'}} src="src/assets/icons/completeIcon.svg" alt="completeIcon"/>
                </div>

                <div onClick={() => onDelete(todo.id)}>
                    <img src="src/assets/icons/deleteIcon.svg" alt="deleteIcon"/>
                </div>
            </div>
        </div>
    )
}