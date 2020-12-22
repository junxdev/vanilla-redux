import { createStore } from "redux";
import { getFromLocalStorage, saveToLocalStorage } from "./util/local_storage";

const ADD = "ADD";
const DELETE = "DELETE";
const TODOS = "toDos";

const addToDo = text => {
    return {
        type: ADD,
        text
    }
};

const deleteToDo = id => {
    return {
        type: DELETE,
        id
    };
};

const reducer = (state = getFromLocalStorage(TODOS), action) => {
    switch(action.type) {
        case ADD:
            return saveToLocalStorage(TODOS, [{ text: action.text, id: Date.now()}, ...state]);
        case DELETE:
            return saveToLocalStorage(TODOS, state.filter(toDo => toDo.id !== action.id));
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo, deleteToDo
}

export default store;