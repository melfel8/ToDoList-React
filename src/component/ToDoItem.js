import React from "react";

function ToDoItem({todo, index, completeTodo, removeTodo}) {
    return (
        <div className="todo-item" style={{ textDecoration:todo.isCompleted ? 'line-through' : '' }}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Selesai</button>
                <button onClick={() => removeTodo(index)}>Hapus</button>
            </div>
        </div>
    );
}

export default ToDoItem;