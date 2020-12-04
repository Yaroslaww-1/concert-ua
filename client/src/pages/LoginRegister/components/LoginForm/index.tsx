import React from 'react';

import styles from './styles.module.scss';
import FormWrapper from '../../components/FormWrapper';
import ValidatingForm, { IValidatingFormProps } from 'src/components/ValidatingForm';
import Text from 'src/components/Text';
import Link from 'src/components/Link';

export type ILoginFormProps<P> = IValidatingFormProps<P> & { onClickRegister: () => void };

function LoginForm<P extends object>({ onClickRegister, ...props }: ILoginFormProps<P>) {
  return (
    <FormWrapper>
      <Text color="black" textTransform="uppercase" fontSize="2.25rem" fontFamily="League Gothic">
        Login
      </Text>
      <ValidatingForm<P> {...props} />
      <div className={styles.registerButtonRoot}>
        <Link onClick={onClickRegister} text="Register" />
      </div>
    </FormWrapper>
  );
}

export default LoginForm;
