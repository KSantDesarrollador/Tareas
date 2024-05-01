/* eslint-disable react/prop-types */
import { useContext } from "react";
import TaskMap from "./TaskMap";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { task } = useContext(TaskContext);

  if (task.length === 0) {
    return <h3 className="text-center">No hay tareas aún ......</h3>;
  }

  return (
    <table
      border={1}
      cellPadding={5}
      cellSpacing={5}
      className="table table-dark table-striped text-center"
    >
      <thead>
        <tr className="col">
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>ACTION</th>
        </tr>
      </thead>
      {task.map((x) => (
        <TaskMap key={x.id} t={x} />
      ))}
    </table>
  );
}

export default TaskList;
