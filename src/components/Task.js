import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext';

const Task = ({ task }) => {

    const {deleteTask} = useContext(TaskListContext);
    const handleDelete = (event) => {
        deleteTask(task.id);
    }

    return (
        <li className="list-item">
            <span> {task.title} </span>
            <div>
                <button className="btn-delete task-btn">
                    <i className="fas fa-trash-alt" onClick={handleDelete}></i>
                </button>
                <button className="btn-edit task-btn">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
