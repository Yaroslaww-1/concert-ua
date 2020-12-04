import React from 'react';

import PageComponent from 'src/components/Page';
import LogoHeader from './components/LogoHeader';
import LoginForm from './containers/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <PageComponent withoutNavbar={true}>
      <LogoHeader />
      <LoginForm />
    </PageComponent>
  );
};

export default LoginPage;
