import { GET_PERSON_INFO } from "store/consts";

const initialState = {};

export const personInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON_INFO:
      return { ...action.payload };
    default:
      return state;
  }
};
