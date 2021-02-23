import {
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESSFUL,
} from 'store/constants';

const initialState = {
  items: [],
  info: {prev: null, next: null},
  isLoading: false,
  error: null,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CHARACTERS_SUCCESSFUL:
      return {
        ...state,
        info: action.payload.info,
        items: action.payload.results,
        isLoading: false,
      };
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
