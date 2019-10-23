import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_LOAD_TOTAL_QUESTION_BEGIN,
  HOME_LOAD_TOTAL_QUESTION_SUCCESS,
  HOME_LOAD_TOTAL_QUESTION_FAILURE,
  HOME_LOAD_TOTAL_QUESTION_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  loadTotalQuestion,
  dismissLoadTotalQuestionError,
  reducer,
} from '../../../../src/features/home/redux/loadTotalQuestion';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/loadTotalQuestion', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when loadTotalQuestion succeeds', () => {
    const store = mockStore({});

    return store.dispatch(loadTotalQuestion())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_LOAD_TOTAL_QUESTION_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_LOAD_TOTAL_QUESTION_SUCCESS);
      });
  });

  it('dispatches failure action when loadTotalQuestion fails', () => {
    const store = mockStore({});

    return store.dispatch(loadTotalQuestion({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_LOAD_TOTAL_QUESTION_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_LOAD_TOTAL_QUESTION_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissLoadTotalQuestionError', () => {
    const expectedAction = {
      type: HOME_LOAD_TOTAL_QUESTION_DISMISS_ERROR,
    };
    expect(dismissLoadTotalQuestionError()).toEqual(expectedAction);
  });

  it('handles action type HOME_LOAD_TOTAL_QUESTION_BEGIN correctly', () => {
    const prevState = { loadTotalQuestionPending: false };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_TOTAL_QUESTION_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadTotalQuestionPending).toBe(true);
  });

  it('handles action type HOME_LOAD_TOTAL_QUESTION_SUCCESS correctly', () => {
    const prevState = { loadTotalQuestionPending: true };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_TOTAL_QUESTION_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadTotalQuestionPending).toBe(false);
  });

  it('handles action type HOME_LOAD_TOTAL_QUESTION_FAILURE correctly', () => {
    const prevState = { loadTotalQuestionPending: true };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_TOTAL_QUESTION_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadTotalQuestionPending).toBe(false);
    expect(state.loadTotalQuestionError).toEqual(expect.anything());
  });

  it('handles action type HOME_LOAD_TOTAL_QUESTION_DISMISS_ERROR correctly', () => {
    const prevState = { loadTotalQuestionError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_TOTAL_QUESTION_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadTotalQuestionError).toBe(null);
  });
});

