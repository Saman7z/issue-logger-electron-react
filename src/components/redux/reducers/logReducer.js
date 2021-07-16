import { ADD_LOG } from "../types";

const initialState = {
  
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG:
      // const newLog = {
      //   id: 4,
      //   text: action.payload.newIssue,
      //   priority: action.payload.priority,
      //   user: action.payload.user,
      //   created: new Date().toString(),
      // };
      console.log(action.payload);
      return  {...state}
      
    default:
      return state;
  }
};

export default logReducer;
