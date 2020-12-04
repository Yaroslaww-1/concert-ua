import React from 'react';

import { useDispatch } from 'react-redux';

import { login } from '../../redux/actions';
import { ILoginDto } from 'src/api/services/auth.service';
import validateEmail from 'src/common/validations/validate-email';
import LoginForm from '../../components/LoginForm';
import { redirectToRegister } from 'src/common/url/redirect-to-register';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const LoginFormContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const onLogin = (loginData: ILoginDto) => {
    dispatch(login.request(loginData));
  };

  const onRegister = () => redirectToRegister(history);

  return (
    <LoginForm<ILoginDto>
      fields={[
        { id: 'login', label: 'Login', validateInput: validateEmail, type: 'search' },
        { id: 'password', label: 'Password', validateInput: (login) => null, type: 'password' },
      ]}
      submitButtonText="login"
      onSubmit={onLogin}
      onClickRegister={onRegister}
    />
  );
};

export default withRouter(LoginFormContainer);
