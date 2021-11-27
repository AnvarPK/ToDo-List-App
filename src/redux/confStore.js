import { createStore, combineReducers } from 'redux';
import { todoReducer } from './reducers/todos';

const configStore = () => {
    const store = createStore(
        combineReducers({
            todos: todoReducer
        })
    );
    return store;

}
export default configStore;

