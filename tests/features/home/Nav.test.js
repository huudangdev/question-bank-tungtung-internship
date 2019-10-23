import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Nav />);
  expect(renderedComponent.find('.home-nav').length).toBe(1);
});
