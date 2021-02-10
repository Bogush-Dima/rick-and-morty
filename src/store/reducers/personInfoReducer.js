import { GET_EPISODES_NAMES, GET_PERSON_INFO } from "store/constants";

const initialState = {};

export const characterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON_INFO:
      return { ...action.payload };
    case GET_EPISODES_NAMES:
      // const {name, air_date} = action.payload
      if (state.episodesNames) {
        return { ...state, episodesNames: [...state.episodesNames, action.payload]};
      } else {
        return { ...state, episodesNames: [ action.payload ]};
      }
      
    default:
      return state;
  }
};
