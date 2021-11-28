import { ADD_TODO, DELETE_TODO, REMOVE_TODO, RESTORE_TODO, TOGGLE_TODO, UPDATE_TODO } from "../consts";

export const todoReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            const date = new Date();
            return [
                ...state,
                {
                    id: date.getTime(),
                    title: payload.title,
                    description: payload.description,
                    isCompleted: false,
                    isDeleted: false,
                    date
                }
            ];
        case DELETE_TODO:
            return state.map(todo => {
                if (todo.id === payload) {
                    return { ...todo, isDeleted: true };
                }
                return todo;
            });
        case RESTORE_TODO:
            return state.map(todo => {
                if (todo.id === payload) {
                    return { ...todo, isDeleted: false };
                }
                return todo;
            });
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== payload);
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === payload) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    };
                }
                return todo;
            });
        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        ...payload
                    };
                }
                return todo;
            });
        default:
            return state;
    }
}