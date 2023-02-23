import { FormEvent, useState } from 'react';
import { validateEmail, validatePassword } from '@/lib/utils/validator';
import IForm from '@/interface/signFormType';

const SignForm = ({ type, text, submitFn }: IForm) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitFn(email, password);
  };

  return (
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
        data-testid={`${type}-button`}
        disabled={!validateEmail(email) || !validatePassword(password)}
      >
        {text}
      </button>
    </form>
  );
};

export default SignForm;
