import './todoitem.css'

export default function TodoItem () {
    return (
        <div className='todo-item'>
            <div className='todo-item__date'>
            </div>

            <div className='todo-item__text'>
                <div></div>
            </div>

            <div className='todo-item__icons'>
                <div>
                    <img src="src/assets/icons/uncompleteIcon.svg" alt="uncompleteIcon"/>
                    <img src="src/assets/icons/completeIcon.svg" alt="completeIcon"/>
                </div>

                <div >
                    <img src="src/assets/icons/deleteIcon.svg" alt="deleteIcon"/>
                </div>
            </div>
        </div>
    )
}