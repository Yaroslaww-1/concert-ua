import React from 'react';
import Text from 'src/components/Text';

import styles from './styles.module.scss';

interface IProps {
  eventDescription: string;
}

const EventDescriptionSection: React.FC<IProps> = ({ eventDescription }) => {
  return (
    <div className={styles.root}>
      <Text color="black">{eventDescription}</Text>
    </div>
  );
};

export default EventDescriptionSection;
