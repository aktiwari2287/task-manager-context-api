import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] =  useState([
        {title: 'Read the book', id: 1},
        {title: 'Wash the car', id: 2},
        {title: 'Write some code', id: 3},
    ]);

    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuidv4()}])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id!==id));
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id)
    
        setEditItem(item)
      }
    
      // Edit task
      const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
    
        console.log(newTasks)
    
        setTasks(newTasks)
        setEditItem(null)
      }
    const clearTasks = () => {
        setTasks([]);
    }
    return <TaskListContext.Provider value={{tasks, addTask, deleteTask, editTask, clearTasks, findItem, editItem }}> 
                {props.children}
            </TaskListContext.Provider>
}

export default TaskListContextProvider;