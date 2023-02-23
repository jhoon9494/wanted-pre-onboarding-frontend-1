export default interface IForm {
  type: 'signin' | 'signup';
  text: string;
  //eslint-disable-next-line
  submitFn: (email: string, password: string) => void;
}
