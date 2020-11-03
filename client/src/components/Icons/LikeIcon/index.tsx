import React from 'react';

import styles from './styles.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface IProps {
  onClick: () => void;
}

const LikeIcon: React.FC<IProps> = ({ onClick }) => {
  return (
    <div className={styles.root}>
      <FavoriteBorderIcon onClick={onClick} />
    </div>
  );
};

export default LikeIcon;
