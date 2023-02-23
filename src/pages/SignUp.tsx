import { Link } from 'react-router-dom';

const SignUp = () => {
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
        <button data-testid="signup-button">회원가입</button>
      </form>
      <Link to="/signin">로그인 하러가기</Link>
    </div>
  );
};

export default SignUp;
