export const initialState = {
    todos: {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589 
    }
};

export const reducer = (state, action) => {
    switch (action.type){

        case "UPDATE_TODO": 
        return {
            ...state,
            item: action.payload,
            id: new Date() 
        }

        case "UPDATE_COMPLETED":
            return {
                ...state,
                completed: true,
            }
        default:
            return state
    }
};