import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useFetchIfNeeded } from 'src/common/hooks/use-fetch-if-needed';
import { RootState } from 'src/redux/rootReducer';
import { fetchEvents } from './redux/actions';

import EventsCardsSection from 'src/components/Sections/EventCardsSection';

const EventsSection: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.concerts.events.state.events);
  useFetchIfNeeded(dispatch, fetchEvents.request);
  return <EventsCardsSection events={events} onLoadMore={() => {}} />;
};

export default EventsSection;
