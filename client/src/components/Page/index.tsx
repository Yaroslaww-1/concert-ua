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
  const getClassName = () => {
    let resultedClassName = `${styles.page} ${className} `;
    if (withoutNavbar) resultedClassName += `${styles.withoutNavbar}`;
    return resultedClassName;
  };
  return (
    <div className={getClassName()}>
      {!withoutNavbar && <Navbar />}
      {loading ? <Spinner /> : children}
    </div>
  );
};

export default PageComponent;
