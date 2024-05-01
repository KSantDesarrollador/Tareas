/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskMap({ t }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <tr>
      <td>{t.title}</td>
      <td>{t.description}</td>
      <td>
        <button onClick={() => deleteTask(t.id)}>DELETE</button>
      </td>
    </tr>
  );
}

export default TaskMap;
