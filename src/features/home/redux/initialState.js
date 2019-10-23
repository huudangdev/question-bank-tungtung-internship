const initialState = {
  loadQuestionsPending: false,
  loadQuestionsError: null,
  listQuestion:[],
  curPage:1,
  curQuestion:null,
  totalPages:null,
  totalQuestion:null,
  curItemPerPage:20,
  positionScroll:null,
  loadTotalQuestionPending: false,
  loadTotalQuestionError: null,
  loadQuestionsByIdPending: false,
  loadQuestionsByIdError: null
};

export default initialState;
