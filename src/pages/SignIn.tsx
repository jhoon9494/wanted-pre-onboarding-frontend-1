import { AxiosError } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '@/lib/utils/validator';
import { signIn } from '@/api/auth';
import { ACCESS_TOKEN } from '@/constants/token';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      navigate('/todo', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <label>
          이메일
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          data-testid="signin-button"
          disabled={!validateEmail(email) || !validatePassword(password)}
        >
          로그인
        </button>
      </form>
      <Link to="/signup">아직 회원이 아니신가요?</Link>
    </div>
  );
};

export default SignIn;
