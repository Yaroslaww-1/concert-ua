import React from 'react';

import styles from './styles.module.scss';
import ColoredButton from '../Buttons/ColoredButton';
import { IValidationInputProps } from '../Inputs/ValidationInput';
import FormInput from '../Inputs/FormInput';

export interface IValidatingFormProps<P> {
  fields: IValidationInputProps[];
  submitButtonText: string;
  onSubmit: (payload: P) => void;
}

function ValidationForm<P extends object>({ fields, submitButtonText, onSubmit }: IValidatingFormProps<P>) {
  const [formState, setFormState] = React.useState<P>({} as P);

  React.useEffect(() => {
    for (const field of fields) {
      setFormState({ ...formState, [field.id]: '' });
    }
  }, [fields]);

  const updateState = (fieldId: string) => (newValue: string) => {
    setFormState({ ...formState, [fieldId]: newValue });
  };

  return (
    <div className={styles.root}>
      {fields.map((field) => (
        <FormInput classes={{ root: styles.inputRoot }} key={field.id} {...field} onEdit={updateState(field.id)} />
      ))}
      <div className={styles.submitButtonRoot}>
        <ColoredButton
          text={submitButtonText}
          onClick={() => onSubmit(formState)}
          classes={{ root: styles.submitButton }}
        />
      </div>
    </div>
  );
}

export default ValidationForm;
