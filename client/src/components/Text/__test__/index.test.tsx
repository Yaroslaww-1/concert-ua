import React from 'react';
import { render } from '@testing-library/react';
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
});

// test('Link changes the class when hovered', () => {
//   // let tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
//   // // manually trigger the callback
//   // tree.props.onMouseEnter();
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
//   // // manually trigger the callback
//   // tree.props.onMouseLeave();
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
// });
