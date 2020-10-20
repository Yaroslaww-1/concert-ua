import React from 'react';

import styles from './styles.module.scss';
import PageComponent from 'src/components/Page';

const HomePage: React.FC = () => {
  return <PageComponent loading={false}></PageComponent>;
};

export default HomePage;
