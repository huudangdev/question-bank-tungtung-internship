import {
  HOME_CHANGE_TOTAL_PAGE,
} from '../../../../src/features/home/redux/constants';

import {
  changeTotalPage,
  reducer,
} from '../../../../src/features/home/redux/changeTotalPage';

describe('home/redux/changeTotalPage', () => {
  it('returns correct action by changeTotalPage', () => {
    expect(changeTotalPage()).toHaveProperty('type', HOME_CHANGE_TOTAL_PAGE);
  });

  it('handles action type HOME_CHANGE_TOTAL_PAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_TOTAL_PAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
