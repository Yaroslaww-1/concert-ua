import React from 'react';

import EventsCardsSection from 'src/components/Sections/EventCardsSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { fetchNewEvents, paginationActions } from './redux/actions';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';

const NewEventsSection: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.home.newEvents.state.events);
  useInitialFetch(dispatch, fetchNewEvents.request);
  return (
    <EventsCardsSection
      events={events}
      header={'New events'}
      onLoadMore={() => dispatch(paginationActions.loadMore())}
    />
  );
};

export default NewEventsSection;
