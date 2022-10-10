import classnames from 'classnames';

import './todo-item.css';
import { Todo } from '../todoSlice';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  todo: Todo,
  onChange: () => void,
}

export const TodoItem = (props: Props): JSX.Element => (
  <li className={classnames({ done: props.todo.done })}>
    <input
      type="checkbox"
      name={props.todo.id}
      id={props.todo.id}
      onChange={props.onChange}
    />
    <label htmlFor={props.todo.id}>{props.todo.text}</label>
  </li>
);
