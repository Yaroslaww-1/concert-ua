import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

import PopularEventsSection from '../../components/PopularEventsSection';

const PopularEvents: React.FC = () => {
  const events = useSelector((state: RootState) => state.event.state.popularEvents);

  return <PopularEventsSection events={events} />;
};

export default PopularEvents;
