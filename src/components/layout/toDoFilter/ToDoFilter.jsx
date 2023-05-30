import "./toDoFilter.scss"

const ToDoFilter = ({ onFilterChange }) => {

   return (
      <div className='todo__filter'>
         <button onClick={() => onFilterChange('all')}>All</button>
         <button onClick={() => onFilterChange('todo')}>Todo</button>
         <button onClick={() => onFilterChange('done')}>Done</button>
      </div>
   );
};

export default ToDoFilter;