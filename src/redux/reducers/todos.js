import { getLocalTodos } from "../../helper/getLocal";
import { setLocalTodos } from "../../helper/setLocal";
import { ADD_TODO, DELETE_TODO, REMOVE_TODO, RESTORE_TODO, TOGGLE_TODO, UPDATE_TODO } from "../consts";


export const todoReducer = (state = getLocalTodos(), action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            const date = new Date();
            state = [
                ...state,
                {
                    id: date.getTime(),
                    title: payload.title,
                    description: payload.description,
                    isCompleted: false,
                    isDeleted: false,
                    date
                }
            ]
            setLocalTodos(state)
            return state;
        case DELETE_TODO:
            state = state.map(todo => {
                if (todo.id === payload) {
                    return { ...todo, isDeleted: true };
                }
                return todo;
            });
            setLocalTodos(state)
            return state
        case RESTORE_TODO:
            state = state.map(todo => {
                if (todo.id === payload) {
                    return { ...todo, isDeleted: false };
                }
                return todo;
            });
            setLocalTodos(state)
            return state
        case REMOVE_TODO:
            state = state.filter(todo => todo.id !== payload);
            setLocalTodos(state)
            return state
        case TOGGLE_TODO:
            state = state.map(todo => {
                if (todo.id === payload) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    };
                }
                return todo;
            });
            setLocalTodos(state)
            return state
        case UPDATE_TODO:
            state = state.map(todo => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        ...payload
                    };
                }
                return todo;
            });
            setLocalTodos(state)
            return state
        default:
            return state;
    }
}