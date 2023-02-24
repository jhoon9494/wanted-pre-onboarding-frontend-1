import { updateTodo, deleteTodo } from '@/api/todo';
import { ITodoItem } from '@/pages/TodoPage/types';
import { useState } from 'react';

const TodoItem = ({ todo, getTodos }: ITodoItem) => {
  const [isModify, setIsModify] = useState(false);
  const [todoInput, setTodoInput] = useState(todo.todo);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheck = () => {
    if (!isProcessing) {
      setIsProcessing(true);

      updateTodo({
        todo: todoInput,
        id: todo.id,
        isCompleted: !todo.isCompleted,
      })
        .then(() => getTodos())
        .catch((err) => alert(err.response.data.log || err.log))
        .finally(() => {
          setIsProcessing(false);
        });
    }
  };

  const handleSubmit = () => {
    if (!isProcessing) {
      setIsProcessing(true);
      updateTodo({
        todo: todoInput,
        id: todo.id,
        isCompleted: todo.isCompleted,
      })
        .then(() => {
          getTodos();
          setIsModify(false);
        })
        .catch((err) => alert(err.response.data.log || err.log))
        .finally(() => {
          setIsProcessing(false);
        });
    }
  };

  const handleDelete = () => {
    if (!isProcessing) {
      setIsProcessing(true);
      deleteTodo(todo.id)
        .then(() => getTodos())
        .catch((err) => alert(err.response.data.log || err.log))
        .finally(() => {
          setIsProcessing(false);
        });
    }
  };

  const handleModify = () => {
    setTodoInput(todo.todo);
    setIsModify((curr) => !curr);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleCheck}
        />
        {isModify ? (
          <input
            data-testid="modify-input"
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      <button
        data-testid={isModify ? 'submit-button' : 'modify-button'}
        onClick={isModify ? handleSubmit : handleModify}
      >
        {isModify ? '제출' : '수정'}
      </button>
      <button
        data-testid={isModify ? 'cancel-button' : 'delete-button'}
        onClick={isModify ? handleModify : handleDelete}
      >
        {isModify ? '취소' : '삭제'}
      </button>
    </li>
  );
};

export default TodoItem;
