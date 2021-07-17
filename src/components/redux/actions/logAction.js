import { ADD_LOG,REMOVE_LOG } from "../types";

export const addLog = (data) => (dispatch) => {
  //  console.log(newIssue, user, priority);
dispatch({ type: ADD_LOG, payload: {id:Math.floor(Math.random()*100+1),text:data.newIssue,priority:data.priority,user:data.user,created:new Date().toString()} });

};

//! Delete cEll
export const deleteTableCell = (id) => dispatch => {
  dispatch({type:REMOVE_LOG,payload:id})
}
