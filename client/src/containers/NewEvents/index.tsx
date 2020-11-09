import React from 'react';

import styles from './styles.module.scss';
import EventsCardsSection from 'src/components/Sections/EventCardsSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { fetchNewEvents } from './redux/actions';
import { useFetchIfNeeded } from 'src/common/hooks/use-fetch-if-needed';

const NewEventsSection: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.home.newEvents.state.events);
  useFetchIfNeeded(dispatch, fetchNewEvents.request);
  return <EventsCardsSection events={events} header={'New events'} onLoadMore={() => {}} />;
};

export default NewEventsSection;
