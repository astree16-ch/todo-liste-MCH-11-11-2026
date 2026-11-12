import React from 'react'
import { useEffect,useState } from "react";
import Todo from './Todo';



const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
            
    }, []);

           
    return (
    <div>
      <h2>Ma liste de tâches</h2>
     <input type="text" placeholder="Ajouter une tâche" onChange ={ (e) => setNewTodo(e.target.value)} />
      <button>Add a todo</button>
            <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />    
              ))}
      </ul>
    </div>
  );
}

 export default Todolist;  