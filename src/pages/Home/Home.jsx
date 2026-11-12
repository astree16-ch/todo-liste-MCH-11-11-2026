import React from "react";
import "./Home.css";
import Todolist from "../../components/Todolist/Todolist";


export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Todo List App</h2>
      <Todolist />
    </div>
  );
}