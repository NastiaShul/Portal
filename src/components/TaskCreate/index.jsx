import { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useTasksContext } from "../../hooks/use-tasks-context";

import Input from "../Input";
import Button from "../Button";

import "./taskCreate.scss";

const TaskCreate = () => {
   const { addTask } = useTasksContext();
   const [value, setValue] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      addTask(value);
      setValue("");
   };

   return (
      <form onSubmit={handleSubmit} className="new-task">
         <Input
            value={value}
            onChange={setValue}
            placeholder="add your tasks here"
            type="text" />
         <Button><VscAdd /></Button>
      </form>
   )
};

export default TaskCreate;