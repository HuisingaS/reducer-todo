import React from 'react';
import {initialState, reducer} from './reducers/reducer';
import { useState, useReducer } from "react";


function Todo(props){

    return (
         <div onClick = { () => {props.updateCompleted(props.todo.id)} }> 
            <h3>{props.todo.item}</h3>
        </div>
    )
};

export default Todo;