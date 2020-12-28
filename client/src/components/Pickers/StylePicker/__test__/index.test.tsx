import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import StylePicker from '../index';
import { defaultStyle, StyleModel } from 'src/api/models/style.model';

describe('StylePicker', () => {
  const setup = ({
    styles = [],
    preSelected = [],
    onClose = () => {},
    onSelect = () => null,
  }: {
    styles?: StyleModel[];
    preSelected?: StyleModel[];
    onClose?: () => void;
    onSelect?: () => Error | null;
  }) => {
    const { container } = render(
      <StylePicker styles={styles} preSelected={preSelected} onClose={onClose} onSelect={onSelect} />,
    );
    const closeButtonWrapper = container.getElementsByTagName('div').item(1);
    const closeButton = closeButtonWrapper?.getElementsByTagName('div').item(1)!;

    const stylesCheckboxes = container
      .getElementsByClassName('MuiFormGroup-root')
      .item(0)!
      .getElementsByTagName('label');

    const selectedStylesCheckboxes = container
      .getElementsByClassName('MuiFormGroup-root')
      .item(0)!
      .getElementsByClassName('Mui-checked');

    return {
      container,
      closeButton,
      stylesCheckboxes,
      selectedStylesCheckboxes,
    };
  };

  it('should match snapshot', () => {
    const { container } = setup({});
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onClose on close', () => {
    const onClose = jest.fn(() => {});
    const { closeButton } = setup({ onClose });
    fireEvent.click(closeButton, onClose);
    expect(onClose).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should render styles checkboxes', () => {
    const { stylesCheckboxes } = setup({ styles: [defaultStyle] });
    expect(stylesCheckboxes.length).toBe(1);
  });

  it('should render styles checkboxes', () => {
    const { stylesCheckboxes } = setup({ styles: [defaultStyle] });
    expect(stylesCheckboxes.length).toBe(1);
  });

  it('should preselect styles checkboxes', () => {
    const { selectedStylesCheckboxes } = setup({ styles: [defaultStyle], preSelected: [defaultStyle] });
    expect(selectedStylesCheckboxes.length).toBe(1);
  });
});
