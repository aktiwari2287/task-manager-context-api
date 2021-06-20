import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import NoTaskFound from './NoTaskFound';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    return (
        <div>
            <ul className="list">
                { tasks && tasks.length > 0 ?
                    tasks.map((task) => {
                        return <Task task={task} key={task.id}/>
                    })
                    :
                    <NoTaskFound></NoTaskFound>
                }
            </ul>
        </div>
    )
}

export default TaskList
