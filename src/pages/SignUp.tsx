import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '@/api/auth';
import { ACCESS_TOKEN } from '@/constants/token';
import SignForm from '@/components/SignForm';

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      navigate('/todo', { replace: true });
    }
  }, [navigate]);

  const onSubmit = async (email: string, password: string) => {
    try {
      await signUp({ email, password });
      navigate('/signin', { replace: true });
    } catch (e) {
      if (e instanceof AxiosError) {
        alert(e.response?.data.message);
      }
    }
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <SignForm type="signup" text="회원가입" submitFn={onSubmit} />
      <Link to="/signin">로그인 하러가기</Link>
    </div>
  );
};

export default SignUp;
