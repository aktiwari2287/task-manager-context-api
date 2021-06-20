import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext';

const Task = ({ task }) => {

    const {deleteTask, editTask} = useContext(TaskListContext);
    
    const handleDelete = (event) => {
        deleteTask(task.id);
    }

    const handleEditTask = (event) => {
       
    }

    return (
        <li className="list-item">
            <span> {task.title} </span>
            <div>
                <button className="btn-delete task-btn">
                    <i className="fas fa-trash-alt" onClick={handleDelete}></i>
                </button>
                <button className="btn-edit task-btn">
                    <i className="fas fa-pen" onClick={handleEditTask}></i>
                </button>
            </div>
        </li>
    )
}

export default Task
