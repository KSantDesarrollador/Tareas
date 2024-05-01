/* eslint-disable react/prop-types */
import { useContext } from "react";
import TaskMap from "./TaskMap";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { task } = useContext(TaskContext);

  if (task.length === 0) {
    return <h3>No hay tareas aún ......</h3>;
  }

  return (
    <table border={0} cellPadding={5} cellSpacing={5}>
      <th>TITLE</th>
      <th>DESCRIPTION</th>
      <th>ACTION</th>
      {task.map((x) => (
        <TaskMap key={x.id} t={x} />
      ))}
    </table>
  );
}

export default TaskList;
