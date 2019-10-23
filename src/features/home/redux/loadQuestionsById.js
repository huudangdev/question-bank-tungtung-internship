import {
  HOME_LOAD_QUESTIONS_BY_ID_BEGIN,
  HOME_LOAD_QUESTIONS_BY_ID_SUCCESS,
  HOME_LOAD_QUESTIONS_BY_ID_FAILURE,
  HOME_LOAD_QUESTIONS_BY_ID_DISMISS_ERROR,
} from './constants';
import axios from 'axios';

// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function loadQuestionsById(id) {
  return dispatch => {
    // optionally you can have getState as the second argument
    dispatch({
      type: HOME_LOAD_QUESTIONS_BY_ID_BEGIN,
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      //const doRequest = args.error ? Promise.reject(new Error()) : Promise.resolve();
      const doRequest = axios.get(
        `https://tungtung-sample.herokuapp.com/tests/data/questions/find?id=${id}&key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTcxNzQ5MzYwLCJleHAiOjE1NzE5MjIxNjB9.6FMUXaYps36zB9sHAmeDNFO1R8X5uk81DRxTfLgB4Kg`,
      );
      doRequest.then(
        res => {
          dispatch({
            type: HOME_LOAD_QUESTIONS_BY_ID_SUCCESS,
            data: res.data,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        err => {
          dispatch({
            type: HOME_LOAD_QUESTIONS_BY_ID_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissLoadQuestionsByIdError() {
  return {
    type: HOME_LOAD_QUESTIONS_BY_ID_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_LOAD_QUESTIONS_BY_ID_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        loadQuestionsByIdPending: true,
        loadQuestionsByIdError: null,
      };

    case HOME_LOAD_QUESTIONS_BY_ID_SUCCESS:
      // The request is success
      return {
        ...state,
        curQuestion:action.data,
        loadQuestionsByIdPending: false,
        loadQuestionsByIdError: null,
      };

    case HOME_LOAD_QUESTIONS_BY_ID_FAILURE:
      // The request is failed
      return {
        ...state,
        loadQuestionsByIdPending: false,
        loadQuestionsByIdError: action.data.error,
      };

    case HOME_LOAD_QUESTIONS_BY_ID_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        loadQuestionsByIdError: null,
      };

    default:
      return state;
  }
}
