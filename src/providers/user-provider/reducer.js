import { userTypes } from "./types";
import { initialState } from "./state";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.LOGIN_USER:
      return { ...state, user: payload };

    case userTypes.LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};
