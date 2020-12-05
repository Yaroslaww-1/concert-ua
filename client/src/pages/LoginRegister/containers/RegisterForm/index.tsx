import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions';
import { IRegisterDto } from 'src/api/services/auth.service';
import validateEmail from 'src/common/validations/validate-email';
import { redirectToLogin } from 'src/common/url/redirect-to-login';

import RegisterForm from '../../components/RegisterForm';

const RegisterFormContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const onLogin = () => redirectToLogin(history);

  const onRegister = (registerData: IRegisterDto) => {
    dispatch(register.request(registerData));
  };

  const noValidate = (input: string) => null;

  return (
    <RegisterForm<IRegisterDto>
      fields={[
        { id: 'firstName', label: 'First name', validateInput: noValidate, type: 'search' },
        { id: 'lastName', label: 'Last name', validateInput: noValidate, type: 'search' },
        { id: 'login', label: 'Login', validateInput: validateEmail, type: 'search' },
        { id: 'password', label: 'Password', validateInput: noValidate, type: 'password' },
      ]}
      submitButtonText="Register"
      onSubmit={onRegister}
      onClickLogin={onLogin}
    />
  );
};

export default withRouter(RegisterFormContainer);
