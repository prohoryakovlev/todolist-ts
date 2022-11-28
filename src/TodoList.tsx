import React, {useState} from 'react';
import {FilterValuesType, TasksType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    addTask: (title: string) => void
    removeTask: (taskId: string) => void
    changeTotolistFilter: (nextFilterValue: FilterValuesType) => void

}
const TodoList = (props: TodoListPropsType) => {
    console.log("Todo")
    const [title, setTitle] = useState<string>("")

    const tasksListItems = props.tasks.map((task: TasksType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => props.removeTask(task.id)}>x</button>
            </li>
        )
    })

    const addTasks = () => {
        props.addTask(title)
        setTitle("")
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            addTasks()
                        }
                    }}
                    onChange={(e) => setTitle(e.currentTarget.value)}/>
                <button onClick={addTasks}>✖️
                </button>
            </div>
            <ul>
                {tasksListItems}
            </ul>
            <div>
                <button onClick={() => props.changeTotolistFilter('all')}>All</button>
                <button onClick={() => props.changeTotolistFilter('active')}>Active</button>
                <button onClick={() => props.changeTotolistFilter('completed')}>Completed</button>

            </div>
        </div>
    );
};

export default TodoList;