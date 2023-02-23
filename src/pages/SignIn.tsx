import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <h1>TODO LIST</h1>
      <form>
        <label>
          이메일
          <input type="text" data-testid="email-input" />
        </label>
        <label>
          비밀번호
          <input type="password" data-testid="password-input" />
        </label>
        <button data-testid="signin-button">로그인</button>
      </form>
      <Link to="/signup">아직 회원이 아니신가요?</Link>
    </div>
  );
};

export default SignIn;
