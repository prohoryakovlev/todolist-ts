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
    const addTask = (title: string) => {
        setTasks([{id: v1(), title, isDone: false}, ...tasks])
    }

    const changeTodolistFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)

    }


    const getFilterTasks =
        (tasks: Array<TasksType>, filter: FilterValuesType): Array<TasksType> => {
            let FilterTasks: Array<TasksType> = []

            switch (filter) {
                case "completed":
                    return tasks.filter(tasks => tasks.isDone)
                case "active":
                    return tasks.filter(tasks => !tasks.isDone)
                default:
                    return tasks
            }
        }

    return (
        <div className="App">
            <TodoList
                tasks={getFilterTasks(tasks, filter)}
                title={todoListTitle}
                addTask={addTask}
                removeTask={removeTask}
                changeTotolistFilter={changeTodolistFilter}/>
        </div>
    );
}


export default App;