import React from 'react';
import Spinner from 'src/components/Spinner';
import HeaderContainer from 'src/containers/Header';

interface IProps {
  loading: boolean;
}

const PageComponent: React.FC<IProps> = ({ loading, children }) => {
  return (
    <>
      <HeaderContainer profileNamePreview={'A'} />
      {loading ? <Spinner /> : children}
    </>
  );
};

export default PageComponent;
