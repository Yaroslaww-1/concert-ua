import React from 'react';

import { useDispatch } from 'react-redux';
import { useFetchIfNeeded } from 'src/common/hooks/use-fetch-if-needed';

import PageComponent from 'src/components/Page';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';
import Header from './containers/Header';
import { fetchEvent } from './redux/actions';
import { RouteComponentProps } from 'react-router-dom';

interface IProps {}

const Event: React.FC<IProps & RouteComponentProps<{ id: string }>> = ({ match }) => {
  const getEventId = () => match.params.id;

  const dispatch = useDispatch();
  useFetchIfNeeded(dispatch, fetchEvent.request, getEventId());

  return (
    <PageComponent>
      <Header />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default Event;
