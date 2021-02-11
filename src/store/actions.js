import axios from "axios";
const {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESSFUL,
  GET_CHARACTERS_ERROR,
  GET_CHARACTER_INFO_START,
  GET_CHARACTER_INFO_SUCCESSFUL,
  GET_CHARACTER_INFO_ERROR,
  CLICK_EXIST_IN_CHARACTER,
  CLICK_SPECIES_IN_CHARACTER,
  CLICK_GENDER_IN_CHARACTER,
  GET_EPISODES_INFO_SUCCESSFUL,
  GET_EPISODES_INFO_ERROR,
} = require("./constants");

const queryStart = (type) => ({ type });

const querySuccessful = (type, data) => {
  return {
    type,
    payload: data,
  };
};

const queryError = (type, message) => {
  return {
    type,
    payload: message,
  };
};

export const getCharacters = (
  { name = "", status = "", gender = "" } = {},
  path
) => {
  return async (dispatch) => {
    try {
      dispatch(queryStart(GET_CHARACTERS_START));
      const res = await axios(
        path ||
          `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`
      );
      dispatch(querySuccessful(GET_CHARACTERS_SUCCESSFUL, res.data));
    } catch (err) {
      dispatch(queryError(GET_CHARACTERS_ERROR, err.message));
      throw new Error(err.message);
    }
  };
};

export const getEpisodesInfo = () => {
  return async (dispatch, getState) => {
    try {
      const { episode = [] } = getState().characterInfo.info;
      const episodesInfoArr = [];
      episode.forEach(async (path, ind, arr) => {
        try {
          const res = await axios(path);
          episodesInfoArr.push(res.data);
          if (arr.length - 1 === ind) {
            dispatch(querySuccessful(GET_EPISODES_INFO_SUCCESSFUL, episodesInfoArr));
          }
        } catch (err) {
          throw new Error(err.message);
        }
      });
    } catch (err) {
      dispatch(queryError(GET_EPISODES_INFO_ERROR, err))
      throw new Error(err.message);
    }
  };
};

export const getCharacterInfo = (idOfPerson) => {
  return async (dispatch, getState) => {
    try {
      dispatch(queryStart(GET_CHARACTER_INFO_START));
      const { id } = getState().characterInfo;
      if (id !== +idOfPerson) {
        const characterInfo = await axios(
          `https://rickandmortyapi.com/api/character/${idOfPerson}`
        );
        await dispatch(querySuccessful(GET_CHARACTER_INFO_SUCCESSFUL, characterInfo.data));
        dispatch(getEpisodesInfo());
      }
    } catch (err) {
      dispatch(queryError(GET_CHARACTER_INFO_ERROR, err));
      throw new Error(err.message);
    }
  };
};

export const clickExistInPerson = (exist) => {
  return {
    type: CLICK_EXIST_IN_CHARACTER,
    payload: exist,
  };
};

export const clickSpeciesInPerson = (species) => {
  return {
    type: CLICK_SPECIES_IN_CHARACTER,
    payload: species,
  };
};

export const clickGenderInPerson = (gender) => {
  return {
    type: CLICK_GENDER_IN_CHARACTER,
    payload: gender,
  };
};
