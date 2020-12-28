import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TextComponent from '../index';

describe('TextComponent', () => {
  it('should match snapshot', () => {
    const text = 'Test text';
    const { container } = render(<TextComponent>{text}</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render div with the text', () => {
    const text = 'Test text';
    const { container } = render(<TextComponent>{text}</TextComponent>);
    const element = container.getElementsByTagName('div').item(0);
    expect(element).not.toBeNull();
    expect(element!.innerHTML).toBe(text);
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn(() => {});
    const { container } = render(<TextComponent onClick={onClick}>Text</TextComponent>);
    const element = container.getElementsByTagName('div').item(0)!;
    fireEvent.click(element, onClick);
    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });
});
