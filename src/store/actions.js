import axios from "axios";
const {
  GET_PERSONS_START,
  GET_PERSONS_SUCCESSFUL,
  GET_PERSONS_ERROR,
  CLICK_EXIST_IN_PERSON,
  CLICK_SPECIES_IN_PERSON,
  CLICK_GENDER_IN_PERSON,
  GET_PERSON_INFO,
  GET_EPISODES_INFO,
} = require("./constants");

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
  { name = "", status = "", gender = "" } = {},
  path
) => {
  return async (dispatch) => {
    try {
      dispatch(getPersonsStart());
      const res = await axios(
        path ||
          `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`
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

const getEpisodesInfoSuccessful = (data) => {
  return {
    type: GET_EPISODES_INFO,
    payload: data,
  };
};

export const getEpisodesInfo = () => {
  return async (dispatch, getState) => {
    try {
      const { episode = [] } = getState().characterInfo.info;
      const episodesInfoArr = []
      episode.forEach(async (path, ind, arr) => {
        try {
          const res = await axios(path)
          episodesInfoArr.push(res.data)
          if (arr.length - 1 === ind) {
            dispatch(getEpisodesInfoSuccessful(episodesInfoArr))
          }
        } catch (err) {
          throw new Error(err.message)
        }
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const getCharacterInfo = (idOfPerson) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getPersonsStart());
      const { id } = getState().characterInfo;
      if (id !== +idOfPerson) {
        const characterInfo = await axios(
          `https://rickandmortyapi.com/api/character/${idOfPerson}`
        );
        await dispatch(getPersonInfoSuccessful(characterInfo.data));
        dispatch(getEpisodesInfo());
      }
    } catch (err) {
      dispatch(getPersonsError(err));
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
