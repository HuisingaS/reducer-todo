import React, { useState, useReducer } from "react";
import {initialState, reducer} from './reducers/reducer';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


const Todo = () => {

};

function App() {
  const [currentTodo, setCurrentTodo] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChanges = e => {
    e.preventDefault();
    setCurrentTodo(e.target.value)
  };

  const updateTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TODO", payload: currentTodo})
  };

  const updateCompleted = (item) => {
    dispatch ({ type: "UPDATE_COMPLETED", payload: item})
  };

  return (

      <div className = "App">

          <TodoForm 
          currentTodo = {currentTodo}
          handleChanges = {handleChanges}
          updateTodo = {updateTodo}
          />
           
          <TodoList 
          state = {state}
          updateCompleted = {updateCompleted}
          dispatch = {dispatch}
          />

      </div>
  );
};

export default App;