import { shallowEqual } from 'react-redux';

import { useAppSelector } from './hooks';
import { TodoItem } from './components/todo-item';
import { TodoForm } from './components/todo-form';

import './App.css';

export const App = (): JSX.Element => {
  const count = useAppSelector((state) => state.todo.count, shallowEqual);
  const todos = useAppSelector((state) => state.todo.todos, shallowEqual);

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
          />
        ))}
      </ul>
      {count === 0 && <p>No todos</p>}

      <TodoForm />
    </div>
  );
}
