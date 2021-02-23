import {combineReducers} from 'redux';
import {charactersReducer} from './reducers/charactersReducer';
import {characterInfoReducer} from './reducers/characterInfoReducer';
import {filterValuesFromCharacterCardReducer} from './reducers/filterValuesFromCharacterCardReducer';
import {oldFiltersReducer} from './reducers/oldFiltersReducer';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  characterInfo: characterInfoReducer,
  filterValuesFromCharacterCard: filterValuesFromCharacterCardReducer,
  oldFilters: oldFiltersReducer,
});
