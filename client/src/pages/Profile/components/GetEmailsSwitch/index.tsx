import React from 'react';

import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch/Switch';
import Text from 'src/components/Text';

import styles from './styles.module.scss';

interface IProps {
  defaultValue: boolean;
  onChange: (newValue: boolean) => void;
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 40,
      height: 20,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 0,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(20px)',
        color: '#65b737',
        '& + $track': {
          opacity: 1,
          backgroundColor: '#fff',
          borderColor: '#65b737',
        },
      },
    },
    thumb: {
      width: 20,
      height: 20,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }),
)(Switch);

const GetEmailsSwitch: React.FC<IProps> = ({ defaultValue, onChange: onChangeProps }) => {
  const [checked, setChecked] = React.useState<boolean>(defaultValue);
  React.useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setChecked(checked);
    onChangeProps(checked);
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Text color="gray" fontSize="0.975rem">
          Want to get emails
        </Text>
        <AntSwitch checked={checked} onChange={onChange} className={styles.switch} disableRipple={true} />
      </div>
    </div>
  );
};

export default GetEmailsSwitch;
