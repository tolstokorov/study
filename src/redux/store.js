import { combineReducers, createStore } from 'redux';

// ActionTypes
const actionTypeToken = 'blah-blah-blah-42';
const ADD_ITEM = `${actionTypeToken}_ADD_ITEM`;
const REMOVE_ITEM = `${actionTypeToken}_REMOVE_ITEM`;
const REVERSE = `${actionTypeToken}_REVERSE`;

// ActionCreators
export const addItem = (text) => {
    return {
        type: ADD_ITEM,
        text
    };
};
export const removeItem = (index) => {
    return {
        type: REMOVE_ITEM,
        index
    };
};
export const reverse = () => {
    return {
        type: REVERSE
    };
};

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
    let stateCopy = { ...state };
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

const rootReducer = combineReducers({ toDoList });
const store = createStore( rootReducer );

export default store;
