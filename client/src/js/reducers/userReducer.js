import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  SEE_ALL_USERS,
  SEE_MESSAGE,
  SEND_MESSAGE,
} from "../const/actionTypes";

const initialState = {
  loading: false,
  user: null,
  users: [],
  messages: [],
  errors: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };

    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: payload,
        user: payload,
      };
    case SEE_ALL_USERS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: payload,
      };
    case SEE_MESSAGE:
      return {
        ...state,
        messages: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
