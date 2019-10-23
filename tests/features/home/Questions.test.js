import React from 'react';
import { shallow } from 'enzyme';
import { Questions } from '../../../src/features/home/Questions';

describe('home/Questions', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(<Questions {...props} />);

    expect(renderedComponent.find('.home-questions').length).toBe(1);
  });
});
