import { APP_CONSTANTS } from "../appconsts";

export const getLocalTodos = () => {
    let todos = []
    try {
        todos = JSON.parse(localStorage.getItem(APP_CONSTANTS.TODO_LOCAL_STORAGE_KEY)) ?? [];

    }
    catch (e) {
        console.error(e);
    }
    return todos;
}