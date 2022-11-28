import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    console.log(typeof v1())

    const todoListTitle: string = 'What to learn'
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (taskId: string) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
        console.log(tasks)
    }
    const addTask = () => {
        const newTask: TasksType = {
            id: v1(),
            title: "Hey-hey!!!",
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const changeTotolistFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)

    }
    let taskForRender: Array<TasksType> = []
    if (filter === 'all') {
        taskForRender = tasks
    } else if (filter === 'active') {
        taskForRender = tasks.filter(tasks => tasks.isDone === false)
    } else if (filter === 'completed') {
        taskForRender = tasks.filter(tasks => tasks.isDone === true)
    }

    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={taskForRender}
                removeTask={removeTask}
                changeTotolistFilter={changeTotolistFilter}/>
        </div>
    );
}


export default App;