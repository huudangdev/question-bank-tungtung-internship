import React from 'react';
import { shallow } from 'enzyme';
import { Answers } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Answers />);
  expect(renderedComponent.find('.home-answers').length).toBe(1);
});
