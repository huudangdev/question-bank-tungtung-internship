import initialState from './initialState';
import { reducer as loadQuestionsReducer } from './loadQuestions';
import { reducer as changeItemPageReducer } from './changeItemPage';
import { reducer as changePageReducer } from './changePage';
import { reducer as changeTotalPageReducer } from './changeTotalPage';
import { reducer as loadTotalQuestionReducer } from './loadTotalQuestion';
import { reducer as loadQuestionsByIdReducer } from './loadQuestionsById';

const reducers = [
  loadQuestionsReducer,
  changeItemPageReducer,
  changePageReducer,
  changeTotalPageReducer,
  loadTotalQuestionReducer,
  loadQuestionsByIdReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
