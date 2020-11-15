import React from 'react';

import { useDispatch } from 'react-redux';
import { useFetchIfNeeded } from 'src/common/hooks/use-fetch-if-needed';

import PageComponent from 'src/components/Page';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';
import Header from './containers/Header';
import { fetchEvent, fetchPopularEvents } from './redux/actions';
import { RouteComponentProps } from 'react-router-dom';
import EventDescription from './containers/EventDescription';
import PopularEvents from './containers/PopularEvents';

interface IProps {}

const Event: React.FC<IProps & RouteComponentProps<{ id: string }>> = ({ match }) => {
  const getEventId = () => match.params.id;

  const dispatch = useDispatch();
  useFetchIfNeeded(dispatch, fetchEvent.request, getEventId());
  useFetchIfNeeded(dispatch, fetchPopularEvents.request);

  return (
    <PageComponent>
      <Header />
      <EventDescription />
      <PopularEvents />
      <Subscribe onSubscribe={() => {}} />
      <Footer />
    </PageComponent>
  );
};

export default Event;
