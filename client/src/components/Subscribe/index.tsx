import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import ValidationInput from '../Inputs/ValidationInput';
import validateEmail from 'src/common/validations/validate-email';
import ColoredButton from '../Buttons/ColoredButton';

interface IProps {
  onSubscribe: (email: string) => void;
}

const Subscribe: React.FC<IProps> = ({ onSubscribe: onSubscribeProps }) => {
  const [email, setEmail] = React.useState<string>('');
  const onSubscribe = () => {
    if (email) {
      onSubscribeProps(email);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.innerRoot}>
        <div className={styles.subscribeText}>
          <Text color="black" fontSize="2.5rem" fontWeight={800} textTransform="uppercase">
            Subscribe for news
          </Text>
        </div>
        <div className={styles.form}>
          <ValidationInput
            onEdit={setEmail}
            validateInput={validateEmail}
            id={'subscribe-email-input'}
            label={'Your email'}
            classes={{ root: styles.inputRoot, textField: styles.inputTextField }}
          />
          <ColoredButton text="Subscribe" onClick={onSubscribe} variant="red" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
