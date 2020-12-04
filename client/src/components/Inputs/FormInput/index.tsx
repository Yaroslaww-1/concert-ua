import React from 'react';

import styles from './styles.module.scss';
import ValidationInput, { IValidationInputProps } from '../ValidationInput';

const FormInput: React.FC<IValidationInputProps> = (props) => {
  return <ValidationInput {...props} classes={{ root: styles.inputRoot }} />;
};

export default FormInput;
