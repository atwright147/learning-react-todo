import classnames from 'classnames';

import './todo-item.css';
import { Todo } from '../todoSlice';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  todo: Todo,
  onChange: () => void,
}

export const TodoItem = (props: Props): JSX.Element => {
  const { done } = props.todo;

  return (
    <li className={classnames({ done })}>
      <input type="checkbox" name={props.todo.id} {...props} />
      <label htmlFor={props.todo.id}>{props.todo.text}</label>
    </li>
  )
}
