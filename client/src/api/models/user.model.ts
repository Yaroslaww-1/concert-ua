export type UserModel = {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
};

export const defaultUser: UserModel = {
  id: 'userid-312',
  email: 'useremail@gmail.com',
  phoneNumber: '+380555553535',
  firstName: 'kappa',
  lastName: 'Keepo',
};
