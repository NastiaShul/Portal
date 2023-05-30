import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import "./toDoPage.scss";

const ToDoPage = () => {
   const { todoId } = useParams();
   const navigate = useNavigate();
   const [todo, setTodo] = useState(null);

   useEffect(() => {
      const localStorageTodos = localStorage.getItem('todos');

      if (localStorageTodos) {
         const parsedTodos = JSON.parse(localStorageTodos);
         const foundTodo = parsedTodos.find(todo => todo.id === parseInt(todoId));
         setTodo(foundTodo);
      }
   }, [todoId]);

   console.log(todo);

   return (
      <section>
         <h2>Todo Details</h2>
         <button className="button" onClick={() => navigate(-1)}>Back</button>
         {todo && (
            <div className="todo-page__item">
               <p><span>Text:</span> {todo.text}</p>
               <p><span>Completed:</span> {todo.completed ? "Yes" : "No"}</p>
            </div>
         )}
      </section>
   );
};

export default ToDoPage;