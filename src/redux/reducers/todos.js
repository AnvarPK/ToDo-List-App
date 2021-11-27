import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../consts";

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
                    completed: false,
                    isDeleted: false,
                    date
                }
            ];
        case REMOVE_TODO:
            return state.map(todo => {
                console.log(todo.id , payload, todo.id === payload)
                if (todo.id === payload) {
                    return { ...todo, isDeleted: true };
                }
                return todo;
            });
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
        default:
            return state;
    }
}