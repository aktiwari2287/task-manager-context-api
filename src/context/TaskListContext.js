import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] =  useState([
        {title: 'Read the book', id: 1},
        {title: 'Wash the car', id: 2},
        {title: 'Write some code', id: 3},
    ]);


    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuidv4()}])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id!==id));
    }

    return <TaskListContext.Provider value={{tasks, addTask, deleteTask }}> 
                {props.children}
            </TaskListContext.Provider>
}

export default TaskListContextProvider;