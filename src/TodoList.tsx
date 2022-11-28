import React from 'react';
import {FilterValuesType, TasksType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: string) => void
    changeTotolistFilter: (nextFilterValue: FilterValuesType) => void

}
const TodoList = (props: TodoListPropsType) => {
    const tasksListItems = props.tasks.map((task: TasksType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => props.removeTask(task.id)}>x</button>
            </li>
        )
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button onClick={()=>alert("Hey!!")}>✖️</button>
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