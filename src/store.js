import { createStore, combineReducers } from "redux";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = todo => ({
  todo,
  type: ADD_TODO
});

export const removeTodo = id => ({
  id,
  type: REMOVE_TODO
});

const addTodoHandler = (state, action) => ({
  todos: [...state.todos, action.todo]
});

const removeTodoHandler = (state, action) => ({
  todos: [
    ...state.todos.slice(0, action.id),
    ...state.todos.slice(action.id + 1)
  ]
});

const initialState = {
  todos: []
};

const todoList = (state = initialState, action) => {
  const handlers = {
    [ADD_TODO]: addTodoHandler,
    [REMOVE_TODO]: removeTodoHandler
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

const rootReducer = combineReducers({
  todoList
});

export default createStore(rootReducer);
