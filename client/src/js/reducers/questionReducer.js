import { ASK_A_QUESTION, SEE_ALL_QUESTIONS } from "../const/actionTypes";

const initialState = {
  question: [],
  loading: true,
};

const questionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEE_ALL_QUESTIONS:
      return {
        ...state,
        question: payload,
        loading:false
      };
    case ASK_A_QUESTION:
      return {
        ...state,
        question: [payload,...state.question],
        loading:false
      };
    default:
      return state;
  }
};

export default questionReducer;
