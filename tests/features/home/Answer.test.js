import React from 'react';
import { shallow } from 'enzyme';
import { Answer } from '../../../src/features/home/Answer';

describe('home/Answer', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Answer {...props} />
    );

    expect(
      renderedComponent.find('.home-answer').length
    ).toBe(1);
  });
});
