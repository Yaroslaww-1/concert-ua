import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import { PlaceModel } from 'src/api/models/place.model';
import { formatDate, getTime } from 'src/common/date/date.helper';

interface IProps {
  dates: {
    date: Date;
    name: string;
    place: PlaceModel;
    price: string;
    descriptionUrl: string;
    onBuyTicket: () => void;
  }[];
}

const OtherDates: React.FC<IProps> = ({ dates }) => {
  const getDateText = (date: Date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = formatDate(date, options);
    return `${formattedDate} ${getTime(date)}`;
  };

  return (
    <div className={styles.root}>
      <Text color="black" textAlign="left" textTransform="uppercase" fontSize="3rem" fontFamily="League Gothic">
        Other dates
      </Text>
      {dates.map((date) => (
        <div className={styles.date} key={date.date.getTime()}>
          <div className={styles.info}>
            <Text color="black" fontSize="2.375rem" fontFamily="League Gothic" textAlign="left">
              {date.name}
            </Text>
            <Text color="black" fontSize="2.375rem" fontFamily="League Gothic" textAlign="left">
              {getDateText(date.date)}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherDates;
