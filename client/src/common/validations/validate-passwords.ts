export const validatePassword = (password: string) => (passwordRepeat: string) => {
  if (password !== passwordRepeat) return Error('Passwords must be equal');
  if (password === '') return Error('Passwords must not be null');
  return null;
};
