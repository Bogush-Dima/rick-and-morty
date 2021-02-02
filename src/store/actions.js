import axios from "axios";
const {
  GET_PERSONS_START,
  GET_PERSONS_SUCCESSFUL,
  GET_PERSONS_ERROR,
  CLICK_EXIST_IN_PERSON,
  CLICK_SPECIES_IN_PERSON,
  CLICK_GENDER_IN_PERSON,
  GET_PERSON_INFO,
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

export const getPersons = (
  { name = "", exist = "", gender = "" } = {},
  path
) => {
  return async (dispatch) => {
    try {
      dispatch(getPersonsStart());
      const res = await axios(
        path ||
          `https://rickandmortyapi.com/api/character/?name=${name}&status=${exist}&gender=${gender}`
      );
      dispatch(getPersonsSuccessful(res.data));
    } catch (err) {
      dispatch(getPersonsError(err.message));
      throw new Error(err.message);
    }
  };
};

const getPersonInfoSuccessful = (data) => {
  return {
    type: GET_PERSON_INFO,
    payload: data,
  };
};

export const getPersonInfo = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      dispatch(getPersonInfoSuccessful(res.data));
    } catch (err) {
      throw new Error(err.message);
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
