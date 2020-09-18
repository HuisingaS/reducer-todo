import React from 'react';
import Todo from './Todo';


const TodoList = props => {
 //const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>What to do?</h2>
                                   
            {props.state.todos.map( todo => {
                    return (<Todo 
                        key = {todo.id} 
                        todo = {todo} 
                        dispatch = {props.dispatch}
                        updateCompleted = {props.updateCompleted}
                        />)                             
        
                })
            }
        </div>  
    )  
};

export default  TodoList;