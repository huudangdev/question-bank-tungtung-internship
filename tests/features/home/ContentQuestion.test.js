import React from 'react';
import { shallow } from 'enzyme';
import { ContentQuestion } from '../../../src/features/home/ContentQuestion';

describe('home/ContentQuestion', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ContentQuestion {...props} />
    );

    expect(
      renderedComponent.find('.home-content-question').length
    ).toBe(1);
  });
});
