import React from 'react';

import styles from './styles.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface IProps {
  onClick: () => void;
  classes?: {
    root?: string;
    svg?: string;
  };
}

const LikeIcon: React.FC<IProps> = ({ onClick, classes }) => {
  return (
    <div className={`${styles.root} ${classes?.root}`}>
      <FavoriteBorderIcon onClick={onClick} classes={{ root: classes?.svg }} />
    </div>
  );
};

export default LikeIcon;
