import { GET_EPISODES_NAMES, GET_PERSON_INFO } from "store/constants";

const initialState = {};

export const personInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON_INFO:
      return { ...action.payload };
    case GET_EPISODES_NAMES:
      if (state.episodesNames) {
        return { ...state, episodesNames: [...state.episodesNames, action.payload]};
      } else {
        return { ...state, episodesNames: [ action.payload ]};
      }
      
    default:
      return state;
  }
};
