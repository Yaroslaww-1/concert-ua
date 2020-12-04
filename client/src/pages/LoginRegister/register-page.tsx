import React from 'react';

import PageComponent from 'src/components/Page';
import LogoHeader from './components/LogoHeader';
import LoginForm from './containers/LoginForm';

const RegisterPage: React.FC = () => {
  return (
    <PageComponent>
      <LogoHeader />
      <LoginForm />
    </PageComponent>
  );
};

export default RegisterPage;
