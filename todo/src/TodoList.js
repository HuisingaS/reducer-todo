import React from 'react';
import {initialState, reducer} from './reducers/reducer';
import { useState, useReducer } from "react";
import Todo from './Todo';

function TodoList(props){

    return (
        <div>
            {
            props.state.map( todo => (
                <Todo
                
                />
            ))

            }
            
        </div>)
        
};

export default TodoList;