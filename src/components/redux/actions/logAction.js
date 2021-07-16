import { ADD_LOG } from "../types";

export const addLog = (data) => (dispatch) => {
  //  console.log(newIssue, user, priority);
dispatch({ type: ADD_LOG, payload: {id:Math.floor(Math.random()+1),text:data.newIssue,priority:data.priority,user:data.user,created:new Date().toString()} });

};
