import { PIN_ERROR, PIN_LOADING, PIN_SUCCESS } from "./pincode.types";

const iState = {
  pinLoading: false,
  pinError: false,
  pinData: [],
};

export const pinReducer = (state = iState, action) => {
  switch (action.type) {
    case PIN_LOADING:
      return {
        ...state,
        pinLoading: true,
      };

    case PIN_SUCCESS:
      return {
        ...state,
        pinData: action.payload,
        pinLoading: false,
      };
    case PIN_ERROR:
      return {
        ...state,
        pinError: true,
        pinLoading: false,
      };

    default:
      return state;
  }
};
