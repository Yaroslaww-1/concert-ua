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

function ValidationForm<P extends Record<string, string>>({
  fields,
  submitButtonText,
  onSubmit,
}: IValidatingFormProps<P>) {
  const [formState, setFormState] = React.useState<P>({} as P);
  const [isValid, setIsValid] = React.useState<boolean>(false);

  React.useEffect(() => {
    for (const field of fields) {
      setFormState({ ...formState, [field.id]: '' });
    }
  }, [fields]);

  React.useEffect(() => {
    const validationErrors = fields.map((field) => field.validateInput && field.validateInput(formState[field.id]));
    if (validationErrors.some((e) => e instanceof Error)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [formState]);

  const updateState = (fieldId: string) => (isValid: boolean, newValue: string) => {
    setFormState({ ...formState, [fieldId]: newValue });
  };

  return (
    <div className={styles.root}>
      {fields.map((field) => (
        <FormInput classes={{ root: styles.inputRoot }} key={field.id} {...field} onEdit={updateState(field.id)} />
      ))}
      <div className={styles.submitButtonRoot}>
        <ColoredButton
          variant="red"
          disabled={!isValid}
          text={submitButtonText}
          onClick={() => onSubmit(formState)}
          classes={{ root: styles.submitButton }}
        />
      </div>
    </div>
  );
}

export default ValidationForm;
