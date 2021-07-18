import { ADD_LOG, REMOVE_LOG, LOAD_LOGS } from "../types";

const initialState = {
  logs: [],
  tableLoading: true,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
      };
    case REMOVE_LOG:
      return {
        ...state,
        logs: state.logs.filter((item) => item.id !== action.payload),
      };
    case LOAD_LOGS:
      return {
        ...state,
        logs: action.payload,
        tableLoading: false,
      };
    default:
      return state;
  }
};

export default logReducer;
