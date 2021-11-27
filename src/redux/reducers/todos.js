import { ADD_TODO, TOGGLE_TODO } from "../consts";

export const todoReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: payload.id,
                    title: payload.title,
                    description: payload.description,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === payload.id) {
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