import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.module.scss';

type IProps = {
  loading?: boolean;
  className?: string;
};

const Spinner: React.FC<IProps> = ({ loading = true, className = '' }: IProps): JSX.Element => {
  const allClass = [styles.spinner, loading ? '' : styles.hide, className].join(' ');

  return (
    <Box className={allClass}>
      <CircularProgress size={100} />
    </Box>
  );
};

export default Spinner;
