import React, { useState } from 'react';

function ToDoForm({addTodo}) {

    const [task, setTask] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        addTodo(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            className='todo-input'
            value={task}
            onChange={(e) => setTask(e.target.task)}
            placeholder='Tambahkan tugas baru...'
            />

            <button type='submit' className='todo-button'>
                Tambah
            </button>
        </form>
    );

}

export default ToDoForm;