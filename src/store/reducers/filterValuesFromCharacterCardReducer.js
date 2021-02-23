import {CLICK_FILTER_VALUE_IN_CHARACTER_CARD} from 'store/constants';

const initialState = {title: '', value: ''};

export const filterValuesFromCharacterCardReducer = (
    state = initialState,
    action,
) => {
  switch (action.type) {
    case CLICK_FILTER_VALUE_IN_CHARACTER_CARD:
      const {title, value} = action.payload;
      return {title, value};
    default:
      return state;
  }
};
