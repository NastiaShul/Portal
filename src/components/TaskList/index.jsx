import { useTasksContext } from "../../hooks/use-tasks-context";

import TaskShow from "../TaskShow";

import "./taskList.scss"

const TaskList = () => {
   const { filteredTasks } = useTasksContext();

   const renderedTasksList = filteredTasks.map(task => {
      return (
         <TaskShow
            key={task.id}
            task={task} />
      )
   });

   return (
      <ul className="task-list">
         {renderedTasksList}
      </ul>
   );
};

export default TaskList;