import { ITodoForm } from '@/pages/TodoPage/types';
import useInputs from '@/lib/hooks/useInputs';
import { FormEvent, useState } from 'react';
import { createTodo } from '@/api/todo';

const TodoForm = ({ getTodos }: ITodoForm) => {
  const [todoData, onChangeTodoData, setTodoData] = useInputs({ todo: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isProcessing) {
      setIsProcessing(true);
      createTodo(todoData.todo)
        .then(() => getTodos())
        .catch((err) => alert(err.response.data.log || err.log))
        .finally(() => {
          setTodoData({ todo: '' });
          setIsProcessing(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        할 일 추가하기
        <input
          data-testid="new-todo-input"
          id="todo"
          name="todo"
          type="text"
          value={todoData.todo}
          onChange={onChangeTodoData}
        />
      </label>
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
};

export default TodoForm;
