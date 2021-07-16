import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const data = [
  {
    id: 1,
    text: "Log Text One",
    priority: "Low",
    user: "Saman",
    created: new Date().toString(),
  },
  {
    id: 2,
    text: "Log Text two",
    priority: "Moderate",
    user: "Saman",
    created: new Date().toString(),
  },
  {
    id: 3,
    text: "Log Text three",
    priority: "High",
    user: "Saman",
    created: new Date().toString(),
  },
];
const initialState = { logs: data };
const middleWare = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
