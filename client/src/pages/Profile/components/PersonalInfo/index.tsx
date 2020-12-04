import React from 'react';

import { UserModel } from 'src/api/models/user.model';

import styles from './styles.module.scss';
import Section from 'src/components/Sections/Section';
import Text from 'src/components/Text';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormInput from 'src/components/Inputs/FormInput';
import validatePhone from 'src/common/validations/validate-phone';

interface IProps {
  user: UserModel;
}

const PersonalInfo: React.FC<IProps> = ({ user }) => {
  return (
    <Section>
      <div className={styles.header}>
        <Text color="black" fontSize="3.375rem" textTransform="uppercase" fontFamily="League Gothic">
          Personal info
        </Text>
        <Text color="gray" fontSize="16px">
          ID: {user.id}
        </Text>
      </div>
      <div className={styles.content}>
        <div className={styles.formSection}>
          <AccountCircleIcon />
          <Text color="black" fontSize="1.125rem" fontWeight={700} textTransform="capitalize">
            Contacts
          </Text>
          <div className={styles.formContent}>
            <FormInput id="firstName" label="First name" defaultValue={user.firstName} />
            <FormInput id="lastName" label="Last name" defaultValue={user.lastName} />
            <FormInput id="email" label="Email" defaultValue={user.email} />
            <FormInput id="phone" label="Phone number" defaultValue={user.phoneNumber} validateInput={validatePhone} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PersonalInfo;
