export type UserModel = {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
};

export const defaultUser: UserModel = {
  id: '',
  email: '',
  phoneNumber: '',
  firstName: '',
  lastName: '',
};
