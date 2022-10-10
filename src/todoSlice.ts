import { current, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string,
  done: boolean,
  text: string,
}

export interface TodosSlice {
  count: number,
  todos: Todo[];
}

const initialState: TodosSlice = {
  count: 3,
  todos: [
    {
      id: uuidv4(),
      done: false,
      text: 'Todo 1',
    },
    {
      id: uuidv4(),
      done: false,
      text: 'Todo 2',
    },
    {
      id: uuidv4(),
      done: false,
      text: 'Todo 3',
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state: TodosSlice, action) => {
      const todo: Todo = {
        id: uuidv4(),
        done: false,
        text: action.payload,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    done: (state: TodosSlice, action) => {
      // state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      const index = state.todos.findIndex((todo) => todo.id !== action.payload);
      console.info('index', index);
      console.info(current(state));
      // console.info('state.todos', state.todos);
      // console.info('action.payload', action.payload);
      // console.info(state.todos[1].id, action.payload);
      // console.info(state.todos[1].id === action.payload);
      state.todos[index].done = true;
    },
  },
});

export const { add, done } = todoSlice.actions;

export default todoSlice.reducer;
