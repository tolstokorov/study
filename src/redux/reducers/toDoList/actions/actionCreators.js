import { ADD_ITEM, REMOVE_ITEM, REVERSE } from "./actionTypes";

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