const {
  GET_PERSONS_START,
  GET_PERSONS_SUCCESSFUL,
  GET_PERSONS_ERROR,
  CLICK_EXIST_IN_PERSON,
  CLICK_SPECIES_IN_PERSON,
  CLICK_GENDER_IN_PERSON,
  CLICK_NEXT_CHARACTERS_LIST,
  CLICK_PREV_CHARACTERS_LIST,
} = require("./consts");

const getPersonsStart = () => {
  return {
    type: GET_PERSONS_START,
  };
};

const getPersonsSuccessful = (data) => {
  return {
    type: GET_PERSONS_SUCCESSFUL,
    payload: data,
  };
};

const getPersonsError = (message) => {
  return {
    type: GET_PERSONS_ERROR,
    payload: message,
  };
};

export const getPersons = () => {
  return async (dispatch) => {
    dispatch(getPersonsStart());
    try {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const res = await data.json();
      dispatch(getPersonsSuccessful(res));
    } catch (err) {
      dispatch(getPersonsError(err));
      console.log(err);
    }
  };
};

export const clickExistInPerson = (exist) => {
  return {
    type: CLICK_EXIST_IN_PERSON,
    payload: exist,
  };
};

export const clickSpeciesInPerson = (species) => {
  return {
    type: CLICK_SPECIES_IN_PERSON,
    payload: species,
  };
};

export const clickGenderInPerson = (gender) => {
  return {
    type: CLICK_GENDER_IN_PERSON,
    payload: gender,
  };
};

const getNextCharactersList = (res) => {
  return {
    type: CLICK_NEXT_CHARACTERS_LIST,
    payload: res,
  };
};

const getPrevCharactersList = (res) => {
  return {
    type: CLICK_PREV_CHARACTERS_LIST,
    payload: res,
  };
};

export const clickPrevOrNextCharactersList = (prevOrNext) => {
  return async (dispatch, getState) => {
    dispatch(getPersonsStart());
    try {
      const path = getState().characters.info[prevOrNext];
      const data = await fetch(`${path}`);
      const res = await data.json();
      prevOrNext === "prev"
        ? dispatch(getPrevCharactersList(res))
        : dispatch(getNextCharactersList(res));
    } catch (err) {
      dispatch(getPersonsError(err));
    }
  };
};
