/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskMap({ t }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <tr >
      <td className="table-success">{t.title}</td>
      <td className="table-success">{t.description}</td>
      <td>
        <button className="btn btn-sm btn-dark" onClick={() => deleteTask(t.id)}>DELETE</button>
      </td>
    </tr>
  );
}

export default TaskMap;
