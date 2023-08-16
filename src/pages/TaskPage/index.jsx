import { useParams } from "react-router-dom";
import { useTasksContext } from "../../hooks/use-tasks-context";

import Panel from "../../components/Panel";
import BackButtonWrapper from "../../components/BackButtonWrapper";

import "./taskPage.scss";

const TaskPage = () => {
   const { taskId } = useParams();
   const { tasks } = useTasksContext();

   const task = tasks.find(task => task.id === parseInt(taskId));
   return (
      <BackButtonWrapper>
         {task ? (
            <Panel title={task.text}>
               {task.completed
                  ? <p className="task-page__text-done">This task alredy done!</p>
                  : <p className="task-page__text">This is not a completed task</p>}
            </Panel>
         ) : (<Panel title="Task not Found"/>)
         }
      </BackButtonWrapper>
   )
};

export default TaskPage;