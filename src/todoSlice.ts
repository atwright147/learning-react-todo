import { createSlice } from '@reduxjs/toolkit';
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
    add: (state, action) => {
      const todo: Todo = {
        id: uuidv4(),
        done: false,
        text: action.payload,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    remove: (state, action) => {
      const newTodosState = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodosState;
      state.count -= 1;
    },
    done: (state: TodosSlice, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].done = !state.todos[index].done;
    },
  },
});

export const { add, done, remove } = todoSlice.actions;

export default todoSlice.reducer;
