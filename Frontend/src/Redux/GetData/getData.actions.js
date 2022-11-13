import {
  GETDATA_ERROR,
  GETDATA_LOADING,
  GETDATA_SUCCESS,
} from "./getData.types";
import axios from "axios";

export const getData =
  (category, q = "", price = "", disSort = "", off = "") =>
  (dispatch) => {
    dispatch({ type: GETDATA_LOADING });
    axios
      .get(
        `http://localhost:8080/products?category=${category}&q=${q}&price=${price}&disSort=${disSort}&off=${off}&page=1&limit=32`
      )
      .then((res) => dispatch({ type: GETDATA_SUCCESS, payload: res.data }))
      .catch((error) => dispatch({ type: GETDATA_ERROR }));
  };
