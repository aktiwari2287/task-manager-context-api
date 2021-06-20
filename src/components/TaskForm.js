import React from 'react';

const TaskForm = () => {
    return (
        <div>
            <form className="form">
                <input type="text" name="" id="" className="task-input" placeholder="Add Task..." required/>
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">Add Task</button>
                    <button type="submit" className="btn clear-btn">Clear</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm
