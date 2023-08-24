import { DECREAMENT, INCREAMENT } from "./counterActionTypes";

export const increamentValue = (value = 1) => {
  return { type: INCREAMENT, payload: value };
};

export const decreamentValue = (value = 1) => {
  return { type: DECREAMENT, payload: value };
};
