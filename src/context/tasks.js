import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

const TasksContext = createContext();

export default TasksContext;

const Provider = ({ children }) => {
   const [tasks, setTasks] = useLocalStorage('tasks', []);
   const [filter, setFilter] = useState('all');

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);

   const filteredTasks = tasks.filter((task) => {
      switch (filter) {
         case "all":
            return true;
         case "todo":
            return !task.completed;
         case "done":
            return task.completed;
         default:
            return true;
      }
   });

   const onFilterChange = (filter) => {
      setFilter(filter);
   };

   const sortTasks = (tasks) => {
      const completedTasks = tasks.filter(task => task.completed);
      const uncompletedTasks = tasks.filter(task => !task.completed);
      return [...uncompletedTasks, ...completedTasks];
   };

   const addTask = (value) => {
      if (value.trim() !== "") {
         const newTask = {
            id: Date.now(),
            text: value,
            completed: false
         };

         setTasks(sortTasks([...tasks, newTask]));
      };
   };

   const toggleCompletedTask = (id) => {
      setTasks((prevTasks) => {
         const updatedTasks = prevTasks.map((task) => {
            if (task.id === id) {
               return { ...task, completed: !task.completed }
            }
            return task;
         });
         return sortTasks(updatedTasks);
      })
   };

   const editTask = (id, newText) => {
      setTasks((prevTasks) => {
         const updatedTasks = prevTasks.map((task) => {
            if (task.id === id) {
               return { ...task, text: newText }
            }
            return task;
         });
         return sortTasks(updatedTasks);
      });
   }

   const deleteTask = (id) => {
      setTasks((prevTasks) => {
         return prevTasks.filter((task) => {
            return task.id !== id;
         })
      });
   };

   const valueToShare = {
      tasks,
      filteredTasks,
      addTask,
      toggleCompletedTask,
      editTask,
      deleteTask,
      onFilterChange
   };

   return (
      <TasksContext.Provider value={valueToShare}>
         {children}
      </TasksContext.Provider>
   )
};

export { Provider };