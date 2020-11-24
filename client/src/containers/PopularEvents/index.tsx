import React from 'react';

import styles from './styles.module.scss';
import EventsCardsSection from 'src/components/Sections/EventCardsSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';
import { fetchPopularEvents } from './redux/actions';

const PopularEventsSection: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.home.popularEvents.state.events);
  useInitialFetch(dispatch, fetchPopularEvents.request);
  return <EventsCardsSection events={events} header={'Popular events'} onLoadMore={() => {}} />;
};

export default PopularEventsSection;
