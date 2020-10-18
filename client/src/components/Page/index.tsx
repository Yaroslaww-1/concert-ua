import React from 'react';
import Spinner from 'src/components/Spinner';
import HeaderComponent from 'src/components/Header';

interface IProps {
  loading: boolean;
}

const PageComponent: React.FC<IProps> = ({ loading, children }) => {
  return (
    <>
      <HeaderComponent profileNamePreview={'A'} />
      {loading ? <Spinner /> : children}
    </>
  );
};

export default PageComponent;
