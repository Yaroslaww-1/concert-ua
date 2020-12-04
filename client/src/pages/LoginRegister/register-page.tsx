import React from 'react';

import PageComponent from 'src/components/Page';
import LogoHeader from './components/LogoHeader';
import RegisterForm from './containers/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <PageComponent withoutNavbar={true}>
      <LogoHeader />
      <RegisterForm />
    </PageComponent>
  );
};

export default RegisterPage;
