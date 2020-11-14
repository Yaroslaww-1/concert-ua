import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import EventDescriptionSection from '../../components/EventDescriptionSection';

const EventDescription: React.FC = () => {
  const event = useSelector((state: RootState) => state.event.state.event);

  return <EventDescriptionSection eventDescription={event.description} />;
};

export default EventDescription;
