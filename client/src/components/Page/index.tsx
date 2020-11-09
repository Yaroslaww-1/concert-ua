import React from 'react';

import styles from './styles.module.scss';
import Spinner from 'src/components/Spinner';
import Navbar from 'src/containers/Navbar';

interface IProps {
  loading?: boolean;
  withoutNavbar?: boolean;
  className?: string;
}

const PageComponent: React.FC<IProps> = ({ loading = false, children, withoutNavbar = false, className = '' }) => {
  return (
    <div className={`${styles.page} ${className}`}>
      {!withoutNavbar && <Navbar />}
      {loading ? <Spinner /> : children}
    </div>
  );
};

export default PageComponent;
