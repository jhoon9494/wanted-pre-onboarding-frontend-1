import { updateCheck } from '@/api/todo';
import { ITodoItem } from '@/pages/TodoPage/types';

const TodoItem = ({ todo, getTodos }: ITodoItem) => {
  const handleCheck = () => {
    updateCheck(todo)
      .then(() => getTodos())
      .catch((err) => alert(err.response.data.log || err.log));
  };
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleCheck}
        />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
