import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from '../../../src/features/home/Pagination';

describe('home/Pagination', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Pagination {...props} />
    );

    expect(
      renderedComponent.find('.home-pagination').length
    ).toBe(1);
  });
});
