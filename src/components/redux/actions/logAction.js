import { ADD_LOG,REMOVE_LOG, LOAD_LOGS } from "../types";
import {ipcRenderer} from 'electron';

//! Add Log
export const addLog = (data) => (dispatch) => {
  //  console.log(newIssue, user, priority);
dispatch({ type: ADD_LOG, payload: {id:Math.floor(Math.random()*100+1),text:data.newIssue,priority:data.priority,user:data.user,created:new Date().toString()} });
};

//! Delete cEll
export const deleteTableCell = (id) => dispatch => {
  dispatch({type:REMOVE_LOG,payload:id})
}

//! FETCH LOGS
export const fetchLogs = () => dispatch => {
  try {
  ipcRenderer.send("get:logs")
  ipcRenderer.on("load:logs",(e,logs) => {
    dispatch({type: LOAD_LOGS,payload:JSON.parse(logs)})
  })
  } catch (error) {
    console.log(error);
  }
}
