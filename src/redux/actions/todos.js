import { ADD_TODO, DELETE_TODO, REMOVE_TODO, RESTORE_TODO, TOGGLE_TODO, UPDATE_TODO } from "../consts";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

export const removeTodo = (payload) => ({
    type: REMOVE_TODO,
    payload
})

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload
})

export const restoreTodo = (payload) => ({
    type: RESTORE_TODO,
    payload
})

export const completeTodo = (payload) => ({
    type: TOGGLE_TODO,
    payload
})

export const updateTodo = (payload) => ({
    type: UPDATE_TODO,
    payload
})