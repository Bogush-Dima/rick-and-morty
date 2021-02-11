import {
  GET_EPISODES_INFO_SUCCESSFUL,
  GET_CHARACTER_INFO_SUCCESSFUL,
  GET_CHARACTER_INFO_START,
  GET_CHARACTER_INFO_ERROR,
  GET_EPISODES_INFO_ERROR,
} from "store/constants";

const initialState = {
  info: { episodesInfo: [] },
  isLoading: false,
  error: null,
};

export const characterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_INFO_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CHARACTER_INFO_SUCCESSFUL:
      return {
        ...state,
        info: { ...state.info, ...action.payload },
      };
    case GET_EPISODES_INFO_SUCCESSFUL:
      return {
        ...state,
        info: {
          ...state.info,
          episodesInfo: action.payload,
        },
        isLoading: false,
      };
    case GET_CHARACTER_INFO_ERROR:
    case GET_EPISODES_INFO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
