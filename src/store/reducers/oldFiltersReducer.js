import { SET_OLD_FILTERS } from "store/constants";

const initialState = {}

export const oldFiltersReducer = (state = initialState, actrion) => {
  switch (actrion.type) {
    case SET_OLD_FILTERS:
      return {...actrion.payload}
    default:
      return state;
  }
}