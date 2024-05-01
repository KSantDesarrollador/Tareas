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
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      &nbsp;
      <table cellPadding={5}>
        <tr>
          <td>
            <input
              size={30}
              placeholder="Escribe una tarea"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus
            ></input>
          </td>
          <td>
            <input
              size={55}
              placeholder="Descripción de la tarea"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></input>
          </td>
          <td>
            &nbsp;<button>SAVE</button>
          </td>
        </tr>
      </table>
    </form>
  );
}

export default TaskForm;
