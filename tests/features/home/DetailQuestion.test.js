import React from 'react';
import { shallow } from 'enzyme';
import { DetailQuestion } from '../../../src/features/home/DetailQuestion';

describe('home/DetailQuestion', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DetailQuestion {...props} />
    );

    expect(
      renderedComponent.find('.home-detail-question').length
    ).toBe(1);
  });
});
