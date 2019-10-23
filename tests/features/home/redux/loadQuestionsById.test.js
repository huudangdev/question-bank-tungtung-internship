import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_LOAD_QUESTIONS_BY_ID_BEGIN,
  HOME_LOAD_QUESTIONS_BY_ID_SUCCESS,
  HOME_LOAD_QUESTIONS_BY_ID_FAILURE,
  HOME_LOAD_QUESTIONS_BY_ID_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  loadQuestionsById,
  dismissLoadQuestionsByIdError,
  reducer,
} from '../../../../src/features/home/redux/loadQuestionsById';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/loadQuestionsById', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when loadQuestionsById succeeds', () => {
    const store = mockStore({});

    return store.dispatch(loadQuestionsById())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_LOAD_QUESTIONS_BY_ID_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_LOAD_QUESTIONS_BY_ID_SUCCESS);
      });
  });

  it('dispatches failure action when loadQuestionsById fails', () => {
    const store = mockStore({});

    return store.dispatch(loadQuestionsById({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_LOAD_QUESTIONS_BY_ID_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_LOAD_QUESTIONS_BY_ID_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissLoadQuestionsByIdError', () => {
    const expectedAction = {
      type: HOME_LOAD_QUESTIONS_BY_ID_DISMISS_ERROR,
    };
    expect(dismissLoadQuestionsByIdError()).toEqual(expectedAction);
  });

  it('handles action type HOME_LOAD_QUESTIONS_BY_ID_BEGIN correctly', () => {
    const prevState = { loadQuestionsByIdPending: false };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_QUESTIONS_BY_ID_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadQuestionsByIdPending).toBe(true);
  });

  it('handles action type HOME_LOAD_QUESTIONS_BY_ID_SUCCESS correctly', () => {
    const prevState = { loadQuestionsByIdPending: true };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_QUESTIONS_BY_ID_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadQuestionsByIdPending).toBe(false);
  });

  it('handles action type HOME_LOAD_QUESTIONS_BY_ID_FAILURE correctly', () => {
    const prevState = { loadQuestionsByIdPending: true };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_QUESTIONS_BY_ID_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadQuestionsByIdPending).toBe(false);
    expect(state.loadQuestionsByIdError).toEqual(expect.anything());
  });

  it('handles action type HOME_LOAD_QUESTIONS_BY_ID_DISMISS_ERROR correctly', () => {
    const prevState = { loadQuestionsByIdError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_QUESTIONS_BY_ID_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadQuestionsByIdError).toBe(null);
  });
});

