import { APP_CONSTANTS } from "../appconsts";

export const setLocalTodos = (todos = []) => {
    try {
        if (todos.length > 0) {
            todos = JSON.parse(localStorage.setItem(APP_CONSTANTS.TODO_LOCAL_STORAGE_KEY, JSON.stringify(todos)));
        }

    }
    catch (e) {
        console.error(e);
    }
}