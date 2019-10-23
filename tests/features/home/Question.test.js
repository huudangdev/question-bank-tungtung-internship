import React from 'react';
import { shallow } from 'enzyme';
import { Question } from '../../../src/features/home/Question';

describe('home/Question', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Question {...props} />
    );

    expect(
      renderedComponent.find('.home-question').length
    ).toBe(1);
  });
});
