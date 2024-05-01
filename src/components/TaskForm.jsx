/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  //Función que toma los valores del formulario y alimenta al elemento newTask
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      createTask({
        title,
        description,
      });

      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      &nbsp;
      <table cellPadding={5} className="table table-secondary  table-striped">
        <tr>
          <td>
            <input
              className="form-control"
              size={30}
              placeholder="Escribe una tarea"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus
            ></input>
          </td>
          <td>
            <input
              className="form-control"
              size={55}
              placeholder="Descripción de la tarea"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></input>
          </td>
          <td>
            &nbsp;<button className="btn btn-success">SAVE</button>
          </td>
        </tr>
      </table>
    </form>
  );
}

export default TaskForm;
