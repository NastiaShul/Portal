import React from 'react';

const ToDoForm = ({ value, onChange, onAddTodo }) => {
   const handleAddClick = (event) => {
      event.preventDefault();
      onAddTodo();
   };

   return (
      <form>
         <input type="text" value={value} onChange={onChange} />
         <button className="button" onClick={handleAddClick}>Add</button>
      </form>
   );
};

export default ToDoForm;