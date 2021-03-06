import React from 'react';

import EventsCardsSection from 'src/components/Sections/EventCardsSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';
import { fetchPopularEvents, paginationActions } from './redux/actions';

const PopularEventsSection: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.home.popularEvents.state.events);
  useInitialFetch(dispatch, fetchPopularEvents.request);
  return (
    <EventsCardsSection
      events={events}
      header={'Popular events'}
      onLoadMore={() => dispatch(paginationActions.loadMore())}
    />
  );
};

export default PopularEventsSection;
