import React, { useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import './toDoItem.scss';

const ToDoItem = memo(({
   todo,
   editing,
   editValue,
   onToggleComplete,
   onStartEditing,
   onEditInputChange,
   onEditTodo,
   onDeleteTodo,
}) => {
   const inputRef = useRef(null);

   useEffect(() => {
      if (editing) {
         inputRef.current.focus();
      }
   }, [editing]);

   return (
      <li key={todo.id}>
         <div className="todo-list__input">
            {editing ? (
               <input
                  className="edit"
                  ref={inputRef}
                  type="text"
                  value={editValue}
                  onChange={onEditInputChange}
               />
            ) : (
               <>
                  <input
                     className="todo-list__checkbox"
                     type="checkbox"
                     checked={todo.completed}
                     onChange={() => onToggleComplete(todo.id)}
                  />
                  <Link to={`/todos/${todo.id}`}>
                     <p className='todo-list__text'>{todo.completed ? <s>{todo.text}</s> : todo.text}</p>
                  </Link>
               </>
            )}
         </div>
         
         <div className="todo-list__buttons">
            {editing ? (
               <button className="button"
                  onClick={() => onEditTodo(todo.id)}>
                  Save
               </button>
            ) : (
               <button
                  className="button"
                  onClick={() => onStartEditing(todo.id, todo.text)}
               >
                  Edit
               </button>
            )}

            <button className="button"
               onClick={() => onDeleteTodo(todo.id)}>
               Delete
            </button>
         </div>
      </li>
   );
});

export default ToDoItem;