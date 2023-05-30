import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import "./toDoPage.scss";

const ToDoPage = () => {
   const { todoId } = useParams();
   const navigate = useNavigate();

   return (
      <section>
         <h2>Todo Details</h2>

         <button className="button" onClick={() => navigate(-1)}>Back</button>
         <h3>Todo ID: {todoId}</h3>
      </section>
   );
};

export default ToDoPage;