import React from 'react';

import styles from './styles.module.scss';
import { InputAdornment, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface IProps {
  id: string;
  label: string;
  onEdit: (newInput: string) => void;
  classes?: {
    root?: string;
    textField?: string;
  };
}

const SearchInput: React.FC<IProps> = ({ id, label, onEdit, classes = { root: '', textField: '' } }) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    onEdit(value);
  };

  return (
    <div className={`${styles.root} ${classes.root}`}>
      <OutlinedInput
        id={id}
        type="text"
        value={inputValue}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        classes={{ root: `${styles.textFieldRoot} ${classes.textField}` }}
        labelWidth={70}
      />
    </div>
  );
};

export default SearchInput;
