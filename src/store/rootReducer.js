import { combineReducers } from "redux";
import { charactersReducer } from "./reducers/charactersReducer";
import { personInfoReducer } from "./reducers/personInfoReducer";

export const rootReducer = combineReducers({
  characters: charactersReducer,
  personInfo: personInfoReducer,
});
