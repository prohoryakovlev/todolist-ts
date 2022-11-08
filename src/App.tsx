import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string =  "What to buy"

    const tasks_1: Array<TaskType> =[
    {id: 1, title:"HTML & CSS", isDone: true},
    {id: 2, title:"JS", isDone: true},
    {id: 3, title:"React", isDone: false},
    ]

    const tasks_2: Array<TaskType> = [
    {id: 4, title:"Beer", isDone: true},
    {id: 5, title:"Milk", isDone: false},
    {id: 6, title:"COla", isDone: true},
    ]

    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
