import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({todos, completeTodo, removeTodo}) {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <ToDoItem
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                />
            ))}
        </div>
    )
}

export default ToDoList;