import React from 'react';


const TodoForm = props => {
    return (
        <div>
            <h1>Add a Task</h1>
                <form>

                <input 
                type = "text"
                name = "currentTodo"
                value = {props.currentTodo} 
                onChange = {props.handleChanges}
                />
                
                <button onClick = {props.updateTodo}>Add Task</button>
                <button>Clear All</button>
                    
                </form>
        </div>
    )
};

export default TodoForm;