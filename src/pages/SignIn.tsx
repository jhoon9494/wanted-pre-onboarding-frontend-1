import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '@/api/auth';
import { ACCESS_TOKEN } from '@/constants/token';
import SignForm from '@/components/SignForm';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      navigate('/todo', { replace: true });
    }
  }, [navigate]);

  const onSubmit = async (email: string, password: string) => {
    try {
      const res = await signIn({ email, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access_token);
      navigate('/todo', { replace: true });
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 401) {
          alert('비밀번호가 다릅니다. 다시 확인해주세요');
        } else if (e.response?.status === 404) {
          alert(e.response.data.message);
        }
      }
    }
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <SignForm type="signin" text="로그인" submitFn={onSubmit} />
      <Link to="/signup">아직 회원이 아니신가요?</Link>
    </div>
  );
};

export default SignIn;
