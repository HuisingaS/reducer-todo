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
            
        default:
            return state;
    };
};