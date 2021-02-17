import axios from 'axios';
import { characterPath, defaultPath } from './paths';
const queryString = require('query-string');
const {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESSFUL,
  GET_CHARACTERS_ERROR,
  GET_CHARACTER_INFO_START,
  GET_CHARACTER_INFO_SUCCESSFUL,
  GET_CHARACTER_INFO_ERROR,
  GET_EPISODES_INFO_SUCCESSFUL,
  GET_EPISODES_INFO_ERROR,
  CLICK_FILTER_VALUE_IN_CHARACTER_CARD,
  SET_OLD_FILTERS,
} = require('./constants');

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

export const getCharacters = (queryPoints = {}, nextOrPrev) => {
  return async (dispatch) => {
    try {
      dispatch(queryStart(GET_CHARACTERS_START));
      if (nextOrPrev) {
        const page = queryString.parse(nextOrPrev.split('?')[1]);
        queryPoints = { ...queryPoints, ...page };
      }
      const queryValues = queryString.stringify(queryPoints);
      const res = await axios(
        nextOrPrev || `${defaultPath}${characterPath}/?${queryValues}`
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
            dispatch(
              querySuccessful(GET_EPISODES_INFO_SUCCESSFUL, episodesInfoArr)
            );
          }
        } catch (err) {
          throw new Error(err.message);
        }
      });
    } catch (err) {
      dispatch(queryError(GET_EPISODES_INFO_ERROR, err));
      throw new Error(err.message);
    }
  };
};

export const getCharacterInfo = (idOfPerson) => {
  return async (dispatch, getState) => {
    try {
      const { id } = getState().characterInfo.info;
      if (id !== +idOfPerson) {
        dispatch(queryStart(GET_CHARACTER_INFO_START));
        const characterInfo = await axios(
          `${defaultPath}${characterPath}/${idOfPerson}`
        );
        await dispatch(
          querySuccessful(GET_CHARACTER_INFO_SUCCESSFUL, characterInfo.data)
        );
        dispatch(getEpisodesInfo());
      }
    } catch (err) {
      dispatch(queryError(GET_CHARACTER_INFO_ERROR, err));
      throw new Error(err.message);
    }
  };
};

export const clickFilterValueInCharacterCard = (title, value) => {
  return {
    type: CLICK_FILTER_VALUE_IN_CHARACTER_CARD,
    payload: {title, value}
  }
}

export const setOldFilters = (data) => {
  return {
    type: SET_OLD_FILTERS,
    payload: data
  }
}