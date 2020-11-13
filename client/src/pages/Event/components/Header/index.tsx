import React from 'react';

import styles from './styles.module.scss';

export interface IProps {
  eventMainImageSrc: string;
  tags?: string[];
}

const Header: React.FC<IProps> = ({ eventMainImageSrc, tags = [] }) => {
  return (
    <div className={styles.root}>
      <div className={styles.imageRoot}>
        <img src={eventMainImageSrc} alt="An image of an event" />
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div className={styles.tag} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buyTicketRoot}></div>
      <div className={styles.nav}></div>
    </div>
  );
};

export default Header;
