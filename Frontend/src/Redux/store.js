import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { getDataReducer } from "./GetData/getData.reducer";
import thunk from "redux-thunk";
import { buttonReducer } from "./ButtonRoute/button.reducer";
import inputReducer from "./Throttling/t.reducer";
import { pinReducer } from "./PinCode/pincode.reducer";
import { singleReducer } from "./SingleProduct/single.reducer";

const rootreducer = combineReducers({
  getData: getDataReducer,
  button: buttonReducer,
  inputData: inputReducer,
  pin: pinReducer,
  single: singleReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
