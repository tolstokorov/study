import { ADD_ITEM, REMOVE_ITEM, REVERSE } from './actions/actionTypes';

const initialState = {
    todos: [
        'React',
        'Redux',
        'TypeScript'
    ],
    placeholder: 'Get a job!',
    reverse: false
};

const toDoList = (state = initialState, action) => {
    const stateCopy = { ...state };
    stateCopy.todos = [...state.todos];
    
    switch (action.type) {
        case ADD_ITEM:
            stateCopy.todos.push(action.text);
            return stateCopy;
        case REMOVE_ITEM:
            stateCopy.todos.splice(action.index, 1);
            return stateCopy;
        case REVERSE:
            stateCopy.reverse = !stateCopy.reverse;
            return stateCopy;
        default:
            return state;
    };
};

export default toDoList;