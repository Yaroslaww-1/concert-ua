import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ValidationInput from '../index';

describe('ValidationInput', () => {
  const setup = ({
    onEdit = () => {},
    validateInput = () => null,
  }: {
    onEdit?: (isValid: boolean) => void;
    validateInput?: () => Error | null;
  }) => {
    const { container } = render(
      <ValidationInput id="id" label="label" onEdit={onEdit} validateInput={validateInput} />,
    );
    const input = container.getElementsByTagName('input').item(0)!;
    return {
      input,
      ...container,
    };
  };

  it('should contain input', () => {
    const { input } = setup({});
    const value = 'custom input value';
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  it('should display error on error input', () => {
    const onEdit = jest.fn((isValid) => isValid);
    const error = new Error('Custom error');
    const { input } = setup({ onEdit, validateInput: () => error });

    const value = 'custom input value';
    fireEvent.change(input, { target: { value } });

    const mockResults = onEdit.mock.results;
    expect(mockResults[mockResults.length - 1].value).toBe(false);
  });
});
