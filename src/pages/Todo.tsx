import { ACCESS_TOKEN } from '@/constants/token';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      navigate('/signin', { replace: true });
    } else {
      // get Todo
    }
  }, [navigate]);

  return <div>TODO</div>;
};

export default Todo;
