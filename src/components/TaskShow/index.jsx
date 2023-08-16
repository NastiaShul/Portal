import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useTasksContext } from "../../hooks/use-tasks-context";

import Button from "../Button";
import TaskEdit from "../TaskEdit";

import "./taskShow.scss";

const TaskShow = ({ task }) => {
   const [showEdit, setShowEdit] = useState(false);
   const { toggleCompletedTask, deleteTask } = useTasksContext();

   const handleToggleCompleteTask = () => {
      toggleCompletedTask(task.id)
   };

   const handleDeleteTask = () => {
      deleteTask(task.id);
   };

   const handleEditTask = () => {
      setShowEdit(!showEdit);
   };

   const handleSubmit = () => {
      setShowEdit(false);
   }

   let content = task.completed
      ? <Link to={`/todos/${task.id}`}><s>{task.text}</s></Link>
      : <Link to={`/todos/${task.id}`}>{task.text}</Link>;
   if (showEdit) {
      content = <TaskEdit task={task} onSubmit={handleSubmit} />
   }

   return (
      <li key={task.id} className="task-item">
         <div className="task-item__content">
            <label className="checkbox">
               <input
                  className="checkbox__input"
                  type="checkbox"
                  checked={task.completed}
                  onChange={handleToggleCompleteTask} />
               <span className={task.completed ? "checkbox__checked" : "checkbox__check"}></span>
            </label>
            {content}
         </div>
         <div className="task-item__btns">
            <Button onClick={handleEditTask}>
               <AiOutlineEdit />
            </Button>
            <Button onClick={handleDeleteTask}>
               <AiOutlineDelete />
            </Button>
         </div>
      </li>
   )
};

export default TaskShow;