import classnames from 'classnames';

import './todo-item.css';
import { Todo } from '../todoSlice';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  todo: Todo,
  handleChange: () => void,
  handleRemove: (id: string) => void,
}

export const TodoItem = (props: Props): JSX.Element => (
  <li className={classnames('todo', { done: props.todo.done })}>
    <input
      type="checkbox"
      name={props.todo.id}
      id={props.todo.id}
      onChange={props.handleChange}
    />
    <label htmlFor={props.todo.id}>{props.todo.text}</label>
    <div className="buttons">
      <button type="button" className="danger" onClick={() => props.handleRemove(props.todo.id)}>&times;</button>
    </div>
  </li>
);
