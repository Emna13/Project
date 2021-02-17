import axios from "axios";
import {
  ASK_A_QUESTION,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  SEE_ALL_QUESTIONS,
  SEE_ALL_USERS,
  SEE_MESSAGE,
  SEND_MESSAGE,
} from "../const/actionTypes";

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });

  try {
    const addRes = await axios.post("/user/register", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (cred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginRes = await axios.post("/user/login", cred);
    localStorage.setItem("token", loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const isAuth = await axios.get("/user/current", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const seeQuestions = () => async (dispatch) => {
  try {
    const question = await axios.get("/user/questions");
    dispatch({
      type: SEE_ALL_QUESTIONS,
      payload: question.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const add = (newQuestion) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const addQes = await axios.post("/user/questions/add", newQuestion, config);
    dispatch({
      type: ASK_A_QUESTION,
      payload: addQes.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const comment = (id,newComment) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const addCom = await axios.put(`/user/questions/comment/${id}`, newComment, config);
    dispatch(seeQuestions());
  } catch (error) {
    console.error(error);
  }
};
export const seeUsers = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const users = await axios.get("/admin/users", config);
    dispatch({
      type: SEE_ALL_USERS,
      payload: users.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export const seeAllQuestions = () => async (dispatch) => {
  try {
    const question = await axios.get("/admin/questions");
    dispatch({
      type: SEE_ALL_QUESTIONS,
      payload: question.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export const seeAllMessages = () => async (dispatch) => {
  try {
    const messages = await axios.get("/admin/message");
    dispatch({
      type: SEE_MESSAGE,
      payload: messages.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export const addMessage = (newMessage) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const addMes = await axios.post("/user/message/add", newMessage, config);
    dispatch({
      type: SEND_MESSAGE,
      payload: addMes.data,
    });
  } catch (error) {
    console.error(error);
  }
};
