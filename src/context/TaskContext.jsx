/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import tasks from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tasks);
  }, []);

  //Función que agrega una tarea al arreglo
  function createTask(t) {
    setTask([
      ...task,
      {
        id: task.length,
        title: t.title,
        description: t.description,
      },
    ]);
  }

  //Función que quita una tarea del arreglo
  function deleteTask(id) {
    setTask(task.filter((t) => t.id !== id));
  }

  return (
    <TaskContext.Provider
      value={{ task, createTask, deleteTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
