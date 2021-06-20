import React, { useContext, useEffect, useState } from 'react';
import {TaskListContext} from '../context/TaskListContext'
const TaskForm = () => {
    const {tasks} = useContext(TaskListContext);
    const {addTask, clearTasks, editTask, editItem} = useContext(TaskListContext);
    const [title, setTitle] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!editItem) {
            addTask(title);
            setTitle('');
        }
       else {
           editTask(title, editItem.id);
       }
    };

    useEffect(() => {
        if (editItem) {
          setTitle(editItem.title)
          console.log(editItem)
        } else {
          setTitle('')
        }
      }, [editItem]);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={title} onChange={handleChange} className="task-input" placeholder="Add Task..." required/>
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">Add Task</button>
                    <button type="button" className="btn clear-btn" onClick={()=> clearTasks()}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm
