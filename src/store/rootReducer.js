import { combineReducers } from 'redux';
import { charactersReducer } from './reducers/charactersReducer';
import { characterInfoReducer } from './reducers/characterInfoReducer';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  characterInfo: characterInfoReducer,
});
