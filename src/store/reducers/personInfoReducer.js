import {
  GET_PERSONS_START,
  GET_PERSONS_ERROR,
  GET_EPISODES_INFO,
  GET_PERSON_INFO,
} from "store/constants";

const initialState = {
  info: { episodesInfo: [] },
  isLoading: false,
  error: null,
};

export const characterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PERSONS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case GET_PERSON_INFO:
      return {
        ...state,
        info: { ...state.info, ...action.payload },
        isLoading: false,
      };
    case GET_EPISODES_INFO:
      return {
        ...state,
        info: {
          ...state.info,
          episodesInfo: action.payload,
        },
      };
    default:
      return state;
  }
};
