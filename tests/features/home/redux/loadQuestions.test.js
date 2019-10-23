import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_LOAD_QUESTIONS_BEGIN,
  HOME_LOAD_QUESTIONS_SUCCESS,
  HOME_LOAD_QUESTIONS_FAILURE,
  HOME_LOAD_QUESTIONS_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  loadQuestions,
  dismissLoadQuestionsError,
  reducer,
} from '../../../../src/features/home/redux/loadQuestions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/loadQuestions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when loadQuestions succeeds', () => {
    const store = mockStore({});

    return store.dispatch(loadQuestions())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_LOAD_QUESTIONS_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_LOAD_QUESTIONS_SUCCESS);
      });
  });

  it('dispatches failure action when loadQuestions fails', () => {
    const store = mockStore({});

    return store.dispatch(loadQuestions({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_LOAD_QUESTIONS_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_LOAD_QUESTIONS_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissLoadQuestionsError', () => {
    const expectedAction = {
      type: HOME_LOAD_QUESTIONS_DISMISS_ERROR,
    };
    expect(dismissLoadQuestionsError()).toEqual(expectedAction);
  });

  it('handles action type HOME_LOAD_QUESTIONS_BEGIN correctly', () => {
    const prevState = { loadQuestionsPending: false };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_QUESTIONS_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadQuestionsPending).toBe(true);
  });

  it('handles action type HOME_LOAD_QUESTIONS_SUCCESS correctly', () => {
    const prevState = { loadQuestionsPending: true };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_QUESTIONS_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadQuestionsPending).toBe(false);
  });

  it('handles action type HOME_LOAD_QUESTIONS_FAILURE correctly', () => {
    const prevState = { loadQuestionsPending: true };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_QUESTIONS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadQuestionsPending).toBe(false);
    expect(state.loadQuestionsError).toEqual(expect.anything());
  });

  it('handles action type HOME_LOAD_QUESTIONS_DISMISS_ERROR correctly', () => {
    const prevState = { loadQuestionsError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_LOAD_QUESTIONS_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.loadQuestionsError).toBe(null);
  });
});

