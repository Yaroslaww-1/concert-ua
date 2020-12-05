import React from 'react';

import styles from './styles.module.scss';
import FormWrapper from '../FormWrapper';
import ValidatingForm, { IValidatingFormProps } from 'src/components/ValidatingForm';
import Text from 'src/components/Text';
import Link from 'src/components/Link';

export type IRegisterFormProps<P> = IValidatingFormProps<P> & { onClickLogin: () => void };

function RegisterForm<P extends Record<string, string>>({ onClickLogin, ...props }: IRegisterFormProps<P>) {
  return (
    <FormWrapper>
      <Text color="black" textTransform="uppercase" fontSize="2.25rem" fontFamily="League Gothic">
        Register
      </Text>
      <ValidatingForm<P> {...props} />
      <div className={styles.registerButtonRoot}>
        <Link onClick={onClickLogin} text="Back to login" />
      </div>
    </FormWrapper>
  );
}

export default RegisterForm;
