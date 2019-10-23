import {
  HOME_CHANGE_ITEM_PAGE,
} from '../../../../src/features/home/redux/constants';

import {
  changeItemPage,
  reducer,
} from '../../../../src/features/home/redux/changeItemPage';

describe('home/redux/changeItemPage', () => {
  it('returns correct action by changeItemPage', () => {
    expect(changeItemPage()).toHaveProperty('type', HOME_CHANGE_ITEM_PAGE);
  });

  it('handles action type HOME_CHANGE_ITEM_PAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_ITEM_PAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
