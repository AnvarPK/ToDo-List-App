import { APP_CONSTANTS } from "../appconsts";

export const setLocalTodos = (todos = []) => {
    try {
        todos = JSON.parse(localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(todos)))

    }
    catch (e) {
        console.error(e);
    }
}