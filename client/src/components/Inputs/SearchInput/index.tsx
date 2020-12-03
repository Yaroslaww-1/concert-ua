import React from 'react';

import styles from './styles.module.scss';
import { InputAdornment, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface IProps {
  id: string;
  placeholder: string;
  defaultValue?: string;
  onEdit?: (newInput: string) => void;
  onSubmitSearch?: (input: string) => void;
  classes?: {
    root?: string;
    textField?: string;
  };
  withSearchIcon?: boolean;
}

const SearchInput: React.FC<IProps> = ({
  id,
  placeholder,
  defaultValue = '',
  onEdit = () => {},
  onSubmitSearch = () => {},
  classes = { root: '', textField: '' },
  withSearchIcon = true,
}) => {
  const [inputValue, setInputValue] = React.useState<string>(defaultValue);

  React.useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

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
          withSearchIcon && (
            <InputAdornment position="end">
              <SearchIcon onClick={() => onSubmitSearch(inputValue)} />
            </InputAdornment>
          )
        }
        classes={{ root: `${styles.textFieldRoot} ${classes.textField}` }}
        labelWidth={70}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
