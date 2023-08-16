import { useState } from "react";
import { useTasksContext } from "../../hooks/use-tasks-context";

import Button from "../Button";

import "./taskFilter.scss";

const TaskFilter = () => {
   const { onFilterChange } = useTasksContext();
   const [active, setActive] = useState(0);

   const handleSetActive = (index) => {
      setActive(index);
   };

   const handleButtonClick = (filter, index) => {
      onFilterChange(filter);
      handleSetActive(index);
   };

   return (
      <div className="sort">
         <Button onClick={() => handleButtonClick('all', 0)} primary={active === 0}>All</Button>
         <Button onClick={() => handleButtonClick('todo', 1)} primary={active === 1}>Todo</Button>
         <Button onClick={() => handleButtonClick('done', 2)} primary={active === 2}>Done</Button>
      </div>
   );
};

export default TaskFilter;