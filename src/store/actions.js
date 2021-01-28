const {
  CLICK_EXIST_IN_PERSON,
  CLICK_RACE_IN_PERSON,
  CLICK_GENDER_IN_PERSON,
} = require("./consts");

export const clickExistInPerson = (exist) => {
  return {
    type: CLICK_EXIST_IN_PERSON,
    payload: exist,
  };
};

export const clickRaceInPerson = (race) => {
  return {
    type: CLICK_RACE_IN_PERSON,
    payload: race,
  };
};

export const clickGenderInPerson = (gender) => {
  return {
    type: CLICK_GENDER_IN_PERSON,
    payload: gender,
  };
};
