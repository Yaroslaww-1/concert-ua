import React from 'react';
import Spinner from 'src/components/Spinner';
import Navbar from 'src/containers/Navbar';

interface IProps {
  loading: boolean;
  withoutNavbar?: boolean;
  className?: string;
}

const PageComponent: React.FC<IProps> = ({ loading, children, withoutNavbar = false, className = '' }) => {
  return (
    <div className={className}>
      {!withoutNavbar && <Navbar />}
      {loading ? <Spinner /> : children}
    </div>
  );
};

export default PageComponent;
