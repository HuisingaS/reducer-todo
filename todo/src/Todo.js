import React from 'react';
import {initialState, reducer} from './reducers/reducer';
import { useState, useReducer } from "react";

function Todo(props){

    return (
        <div>
            {props.state.todos.item}
            
        
        </div>)
        
    
};

export default Todo;