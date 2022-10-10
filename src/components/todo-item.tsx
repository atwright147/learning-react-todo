import classnames from 'classnames';

import './todo-item.css';
import { done, remove, Todo } from '../todoSlice';
import { useAppDispatch } from '../hooks';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  todo: Todo,
}

export const TodoItem = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleRemove = (id: string): void => {
    dispatch(remove(id));
  }

  const handleDone = (id: string): void => {
    dispatch(done(id));
  };

  return (
    <li className={classnames('todo', { done: props.todo.done })}>
      <input
        type="checkbox"
        name={props.todo.id}
        id={props.todo.id}
        onChange={() => handleDone(props.todo.id)}
      />
      <label htmlFor={props.todo.id}>{props.todo.text}</label>
      <div className="buttons">
        <button
          type="button"
          className="danger"
          onClick={() => handleRemove(props.todo.id)}
        >&times;</button>
      </div>
    </li>
  );
}
