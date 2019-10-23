import {
  HOME_CHANGE_PAGE,
} from '../../../../src/features/home/redux/constants';

import {
  changePage,
  reducer,
} from '../../../../src/features/home/redux/changePage';

describe('home/redux/changePage', () => {
  it('returns correct action by changePage', () => {
    expect(changePage()).toHaveProperty('type', HOME_CHANGE_PAGE);
  });

  it('handles action type HOME_CHANGE_PAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_PAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
