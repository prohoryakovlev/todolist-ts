import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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
        const removeTask = () => props.removeTask(task.id)
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    })

    const addTasks = () => {
        props.addTask(title)
        setTitle("")
    }
    const setLocalTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onEnterAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTasks()
        }
    }

    // const setAllFilter = () => props.changeTotolistFilter('all')
    // const setAllActive = () => props.changeTotolistFilter('active')
    // const setAllCompleted = () => props.changeTotolistFilter('completed')

    const onOnClickHandlerCreator = (filter: FilterValuesType) => {
        return () => props.changeTotolistFilter(filter)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onKeyDown={onEnterAddTask}
                    onChange={setLocalTitle}/>
                <button onClick={addTasks}>✖️</button>
            </div>
            <ul>
                {tasksListItems}
            </ul>
            <div>
                <button onClick={onOnClickHandlerCreator("all")}>All</button>
                <button onClick={onOnClickHandlerCreator("active")}>Active</button>
                <button onClick={onOnClickHandlerCreator("completed")}>Completed</button>

            </div>
        </div>
    );
};

export default TodoList;