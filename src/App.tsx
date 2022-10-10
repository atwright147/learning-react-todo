import { shallowEqual } from 'react-redux';
import { add, done, remove, Todo } from './todoSlice';

import { useAppDispatch, useAppSelector } from './hooks';
import { TodoItem } from './components/todo-item';
import { TodoForm } from './components/todo-form';

import './App.css';

export const App = (): JSX.Element => {
  const count = useAppSelector((state) => state.todo.count, shallowEqual);
  const todos = useAppSelector((state) => state.todo.todos, shallowEqual);
  const dispatch = useAppDispatch();

  const handleRemove = (id: string): void => {
    dispatch(remove(id));
  }

  const handleDone = (id: string): void => {
    dispatch(done(id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
      </header>

      <ul className="Todos">
        {count > 0 && todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={() => handleDone(todo.id)}
            handleRemove={() => handleRemove(todo.id)}
          />
        ))}
      </ul>
      {count === 0 && <p>No todos</p>}

      <TodoForm />
    </div>
  );
}
