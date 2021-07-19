import { ADD_LOG, REMOVE_LOG, LOAD_LOGS,DELETE_ALL_LOGS } from "../types";

const initialState = {
  logs: [],
  tableLoading: true,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG:
      //console.log("add logs reducer");
      return {
        ...state,
        logs: [...state.logs, action.payload],
      };
    case REMOVE_LOG:

      return {
        ...state,
        logs: state.logs.filter((item) => item._id !== action.payload._id),
      };
    case LOAD_LOGS:
     // console.log("load log");
      return {
        ...state,
        logs: action.payload,
        tableLoading: false,
      };
    case DELETE_ALL_LOGS:
      return {
        ...state,
        logs:[]
      }
    default:
      return state;
  }
};

export default logReducer;
