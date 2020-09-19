export const initialState = {

    todos : [
                {    
                item: 'Learn about reducers',
                completed: false,
                id: new Date()
                }
            ]
};

export const reducer = (state, action) => {
    switch (action.type){

        case "UPDATE_TODO": 
        return {...state, todos: [...state.todos,
            {item: action.payload,
            completed: false,
            id: new Date()
            }
        ]};
        
        case "UPDATE_COMPLETED":
            return {
                ...state, 
                todos: state.todos.map(todo => {
                    if(todo.id ===action.payload){
                        return {...todo, completed: !todo.completed}
                    } return {...todo} 
                })
            };
            
        case "CLEAN_COMPLETED" :
            return {
                todos: state.todos.filter(eachTodo => !eachTodo.completed)
            }

        default:
            return state;
    };
};

/*Reducer functions take two arguments – the current state and action – and return a new, updated state object based on both arguments.

//In pseudocode, this idea looks like:

//Copy
    (state, action) => newState*/