import React from 'react';

import styles from './styles.module.scss';
import { TextField } from '@material-ui/core';

interface IProps {
  id: string;
  label: string;
  type?: 'search' | 'password';
  onEdit: (newInput: string) => void;
  validateInput: (newInput: string) => Error | null;
  classes?: {
    root?: string;
    textField?: string;
  };
}

const ValidationInput: React.FC<IProps> = ({
  id,
  label,
  type = 'text',
  onEdit,
  validateInput,
  classes = { root: '', textField: '' },
}) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [focused, setFocused] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    const error = validateInput(value);
    setError(error);
    if (!error) {
      onEdit(value);
    }
  };

  return (
    <div className={`${styles.root} ${classes.root}`}>
      <TextField
        id={id}
        placeholder={label}
        type={type}
        variant="outlined"
        classes={{ root: `${styles.textFieldRoot} ${classes.textField}` }}
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