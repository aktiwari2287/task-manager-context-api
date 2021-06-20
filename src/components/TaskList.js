import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import NoTaskFound from "./NoTaskFound";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks && tasks.length > 0 ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <NoTaskFound></NoTaskFound>
      )}
    </div>
  );
};

export default TaskList;
