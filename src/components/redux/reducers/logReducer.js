import { ADD_LOG,REMOVE_LOG } from "../types";

const initialState = {
  logs : [
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
  ]
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG:
      return  {
        ...state,
        logs:[...state.logs,action.payload]
      }
    case REMOVE_LOG:
      return {
        ...state,
        logs:state.logs.filter(item => item.id !== action.payload)
      }

    default:
      return state;
  }
};

export default logReducer;
