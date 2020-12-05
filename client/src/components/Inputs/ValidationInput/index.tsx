import React from 'react';

import styles from './styles.module.scss';
import { TextField } from '@material-ui/core';

export interface IValidationInputProps {
  id: string;
  label: string;
  type?: 'search' | 'password';
  onEdit?: (isValid: boolean, newInput: string) => void;
  defaultValue?: string;
  validateInput?: (newInput: string) => Error | null;
  classes?: {
    root?: string;
    textField?: string;
  };
}

const ValidationInput: React.FC<IValidationInputProps> = ({
  id,
  label,
  type = 'text',
  onEdit = () => {},
  validateInput = () => null,
  defaultValue = '',
  classes = { root: '', textField: '' },
}) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [focused, setFocused] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    const error = validateInput(value);
    setError(error);
    onEdit(error === null, value);
  };

  return (
    <div className={`${styles.root} ${classes.root}`}>
      <TextField
        id={id}
        placeholder={label}
        type={type}
        variant="outlined"
        classes={{ root: `${styles.textFieldRoot} ${classes.textField}` }}
        value={inputValue}
        onChange={onChange}
        error={error && !focused ? true : false}
        helperText={error && !focused ? error.message : ''}
        FormHelperTextProps={{ className: styles.helperText }}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
    </div>
  );
};

export default ValidationInput;
