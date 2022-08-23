import { GET_LOGIN, GET_REGISTER } from "./ActionTypes";

const initstate = {
  Users: [],
  Gif:[]
};
export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_REGISTER:
      return {
        ...state,
      };
    case GET_LOGIN:
      return {
        ...state,
        Users:payload
      };
    default:
      return state;
  }
};
