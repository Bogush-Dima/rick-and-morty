import {
  CLICK_EXIST_IN_PERSON,
  CLICK_GENDER_IN_PERSON,
  CLICK_SPECIES_IN_PERSON,
  GET_PERSONS_ERROR,
  GET_PERSONS_START,
  GET_PERSONS_SUCCESSFUL,
} from "store/consts";

const initialState = {
  items: [],
  info: {prev: null, next: null},
  isLoading: false,
  error: null,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PERSONS_SUCCESSFUL:
      return {
        ...state,
        info: action.payload.info,
        items: action.payload.results,
        isLoading: false,
      };
    case GET_PERSONS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case CLICK_EXIST_IN_PERSON:
      return {
        ...state,
        items: state.items.filter((item) => item.status === action.payload),
      };
    case CLICK_SPECIES_IN_PERSON:
      return {
        ...state,
        items: state.items.filter((item) => item.species === action.payload),
      };
    case CLICK_GENDER_IN_PERSON:
      return {
        ...state,
        items: state.items.filter((item) => item.gender === action.payload),
      };
    default:
      return state;
  }
};
