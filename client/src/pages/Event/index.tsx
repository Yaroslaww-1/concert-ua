import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PageComponent from 'src/components/Page';
import Subscribe from 'src/components/Subscribe';
import Footer from 'src/components/Footer';
import Header from './containers/Header';
import { fetchEvent, fetchPopularEvents } from './redux/actions';
import EventDescription from './containers/EventDescription';
import PopularEvents from './containers/PopularEvents';

interface IProps {}

const Event: React.FC<IProps & RouteComponentProps<{ id: string }>> = ({ match }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const eventId = match.params.id;
    dispatch(fetchEvent.request(eventId));
    dispatch(fetchPopularEvents.request());
  }, [match.params.id]);

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

export default withRouter(Event);
