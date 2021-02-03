import { SEE_ALL_QUESTIONS } from "../const/actionTypes";

const initialState = {
    question: [],
  };

const questionReducer = (state=initialState,action) => {
  switch (action.type) {
      case SEE_ALL_QUESTIONS:
          return 
          {}
          
         
  
      default:
         return state;
  }
  
};

export default questionReducer;
