import React from 'react';

import styles from './styles.module.scss';

import { EventModel } from 'src/api/models/event.model';

export interface IProps {
  event: EventModel;
}

const Header: React.FC<IProps> = ({ event }) => {
  const { imageUrl, tags } = event;
  return (
    <div className={styles.root}>
      <div className={styles.imageRoot} style={{ backgroundImage: `url(${imageUrl}` }}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div className={styles.tag} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.nav}></div>
    </div>
  );
};

export default Header;
