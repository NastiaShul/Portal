import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { ToDoForm, ToDoFilter, ToDoItem } from '../../layout';
import useLocalStorage from '../../../hooks/useLocalStorage';

const ToDoList = () => {
   const [todos, setTodos] = useLocalStorage('todos', []);
   const [inputValue, setInputValue] = useState('');
   const [editingId, setEditingId] = useState(null);
   const [editValue, setEditValue] = useState('');
   const [filter, setFilter] = useState('all');

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   const handleInputChange = useCallback((event) => {
      setInputValue(event.target.value);
   }, []);

   const handleAddTodo = useCallback(() => {
      if (inputValue.trim() !== '') {
         const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
         };

         setTodos((prevTodos) => {
            const updatedTodos = [...prevTodos, newTodo];
            return sortTodos(updatedTodos);
         });

         setInputValue('');
      }
   }, [inputValue]);

   const handleDeleteTodo = useCallback((id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
   }, []);

   const handleStartEditing = useCallback((id, text) => {
      setEditingId(id);
      setEditValue(text);
   }, []);

   const handleEditInputChange = useCallback((event) => {
      setEditValue(event.target.value);
   }, []);

   const handleEditTodo = useCallback((id) => {
      setTodos((prevTodos) => {
         const updatedTodos = prevTodos.map((todo) => {
            if (todo.id === id) {
               return { ...todo, text: editValue };
            }
            return todo;
         });
         return sortTodos(updatedTodos);
      });

      setEditingId(null);
      setEditValue('');
   }, [editValue]);

   const handleToggleComplete = useCallback((id) => {
      setTodos((prevTodos) => {
         const updatedTodos = prevTodos.map((todo) => {
            if (todo.id === id) {
               return { ...todo, completed: !todo.completed };
            }
            return todo;
         });
         return sortTodos(updatedTodos);
      });
   }, []);

   const handleFilterChange = useCallback((filter) => {
      setFilter(filter);
   }, []);

   const sortTodos = useCallback((todos) => {
      const completedTodos = todos.filter((todo) => todo.completed);
      const uncompletedTodos = todos.filter((todo) => !todo.completed);
      return [...uncompletedTodos, ...completedTodos];
   }, []);

   const filteredTodos = useMemo(() => {
      return todos.filter((todo) => {
         switch (filter) {
            case 'all':
               return true;
            case 'todo':
               return !todo.completed;
            case 'done':
               return todo.completed;
            default:
               return true;
         }
      });
   }, [todos, filter]);

   return (
      <section className="todo-list">
         <h2>To do list</h2>
         <ToDoForm
            value={inputValue}
            onChange={handleInputChange}
            onAddTodo={handleAddTodo}
         />

         <ToDoFilter onFilterChange={handleFilterChange} />

            <ul>
               {filteredTodos.map((todo) => (

                  <ToDoItem
                     key={todo.id}
                     todo={todo}
                     editing={editingId === todo.id}
                     editValue={editValue}
                     onToggleComplete={() => handleToggleComplete(todo.id)}
                     onStartEditing={() => handleStartEditing(todo.id, todo.text)}
                     onEditInputChange={handleEditInputChange}
                     onEditTodo={() => handleEditTodo(todo.id)}
                     onDeleteTodo={() => handleDeleteTodo(todo.id)}
                  />
               ))}
            </ul>
      </section>
   );
};

export default ToDoList;