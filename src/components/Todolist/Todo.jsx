import React from 'react'
import "./Todo.css";

export default function Todo({ todo}) {

const isCompleted =
  todo.isCompleted ?? todo.Completed ?? todo.completed ?? false;


return (
    <li>
      <p className={isCompleted ? "completed" : ""}>{todo.text}</p>
      {todo.description && <p>{todo.description}</p>}
      <p>{isCompleted ? "Terminée" : "A faire"}</p>
    </li>
  );
}



  
