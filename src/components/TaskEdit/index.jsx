import { useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import { useTasksContext } from "../../hooks/use-tasks-context";

import Button from "../Button";
import Input from "../Input";

import "./taskEdit.scss";

const TaskEdit = ({ task, onSubmit }) => {
   const [text, setText] = useState(task.text);
   const { editTask } = useTasksContext();

   const handleSubmit = (e) => {
      e.preventDefault();
      editTask(task.id, text);
      onSubmit();
   }

   return (
      <form onSubmit={handleSubmit} className="task-edit">
         <Input value={text} onChange={setText} />
         <Button additional><MdDoneOutline /></Button>
      </form>
   )
};

export default TaskEdit;