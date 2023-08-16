import { useTasksContext } from "../../hooks/use-tasks-context";

import Panel from "../../components/Panel";
import TaskCreate from "../../components/TaskCreate";
import TaskFilter from "../../components/TaskFilter";
import TaskList from "../../components/TaskList";

const ToDoListPage = () => {
   const { tasks } = useTasksContext();
   return (
      <Panel title="To do list">
         <TaskCreate />
         {tasks.length >= 1 && <TaskFilter />}
         <TaskList />
      </Panel>
   )
};

export default ToDoListPage;