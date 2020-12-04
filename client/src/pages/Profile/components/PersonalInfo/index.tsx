import React from 'react';

import { UserModel } from 'src/api/models/user.model';

import styles from './styles.module.scss';
import Section from 'src/components/Sections/Section';
import Text from 'src/components/Text';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import FormInput from 'src/components/Inputs/FormInput';
import validatePhone from 'src/common/validations/validate-phone';
import GetEmailsSwitch from '../GetEmailsSwitch';
import ColoredButton from 'src/components/Buttons/ColoredButton';

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
          <div className={styles.formDescription}>
            <AccountCircleIcon />
            <Text color="black" fontSize="1.125rem" fontWeight={700} textTransform="capitalize">
              Contacts
            </Text>
          </div>
          <div className={styles.formContent}>
            <FormInput id="firstName" label="First name" defaultValue={user.firstName} />
            <FormInput id="lastName" label="Last name" defaultValue={user.lastName} />
            <FormInput id="email" label="Email" defaultValue={user.email} />
            <FormInput id="phone" label="Phone number" defaultValue={user.phoneNumber} validateInput={validatePhone} />
            <GetEmailsSwitch defaultValue={true} onChange={() => {}} />
          </div>
        </div>
        <div className={styles.formSection}>
          <div className={styles.formDescription}>
            <LockIcon />
            <Text color="black" fontSize="1.125rem" fontWeight={700} textTransform="capitalize">
              Change password
            </Text>
          </div>
          <div className={styles.formContent}>
            <FormInput id="password" label="New password" type="password" />
            <FormInput id="passwordRepeat" label="Repeat password" type="password" />
            <ColoredButton
              text="Save"
              variant="gray"
              onClick={() => {}}
              classes={{ root: styles.saveButtonRoot }}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PersonalInfo;
