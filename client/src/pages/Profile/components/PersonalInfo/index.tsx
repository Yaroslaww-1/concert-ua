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
import { IUpdateUserDto } from 'src/api/services/user.service';
import validateEmail from 'src/common/validations/validate-email';
import { validatePassword } from 'src/common/validations/validate-passwords';

interface IProps {
  user: UserModel;
  onSubmit: (newUser: IUpdateUserDto) => void;
}

interface IPersonalInfoFormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordRepeat: string;
}

const PersonalInfo: React.FC<IProps> = ({ user, onSubmit: onSubmitProps }) => {
  const [formState, setFormState] = React.useState<IPersonalInfoFormState>({
    ...user,
    password: '',
    passwordRepeat: '',
  });
  const [isValid, setIsValid] = React.useState<boolean>(false);

  const updateFormState = (formFieldId: keyof IPersonalInfoFormState) => (isValid: boolean, newValue: string) => {
    setFormState({ ...formState, [formFieldId]: newValue });
  };

  React.useEffect(() => {
    const validationErrors = [
      validatePhone(formState.phoneNumber),
      validateEmail(formState.email),
      validatePassword(formState.password)(formState.passwordRepeat),
    ];
    if (validationErrors.some((e) => e instanceof Error)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    console.log(validationErrors);
  }, [formState]);

  const onSubmit = () => {
    onSubmitProps({ ...user, ...formState });
  };

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
            <FormInput
              id="firstName"
              label="First name"
              defaultValue={user.firstName}
              onEdit={updateFormState('firstName')}
            />
            <FormInput
              id="lastName"
              label="Last name"
              defaultValue={user.lastName}
              onEdit={updateFormState('lastName')}
            />
            <FormInput
              id="email"
              label="Email"
              validateInput={validateEmail}
              defaultValue={user.email}
              onEdit={updateFormState('email')}
            />
            <FormInput
              id="phoneNumber"
              label="Phone number"
              defaultValue={user.phoneNumber}
              validateInput={validatePhone}
              onEdit={updateFormState('phoneNumber')}
            />
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
            <FormInput id="password" label="New password" type="password" onEdit={updateFormState('password')} />
            <FormInput
              id="passwordRepeat"
              label="Repeat password"
              type="password"
              onEdit={updateFormState('passwordRepeat')}
            />
            <ColoredButton
              text="Save"
              variant="red"
              onClick={onSubmit}
              classes={{ root: styles.saveButtonRoot }}
              disabled={!isValid}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PersonalInfo;
