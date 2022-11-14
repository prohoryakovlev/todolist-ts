import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const todoListTitle: string = 'What to learn'

    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'HTML & CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])
    const removeTask = (taskId: number) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
        console.log(tasks)
    }
    const [filter, setFilter] = useState<FilterValuesType>('all')

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