import { AxiosError } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '@/lib/utils/validator';
import { signUp } from '@/api/auth';
import { ACCESS_TOKEN } from '@/constants/token';

const SignUp = () => {
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
      <form onSubmit={handleSubmit}>
        <label>
          이메일
          <input
            type="text"
            data-testid="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            data-testid="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          data-testid="signup-button"
          disabled={!validateEmail(email) || !validatePassword(password)}
        >
          회원가입
        </button>
      </form>
      <Link to="/signin">로그인 하러가기</Link>
    </div>
  );
};

export default SignUp;
