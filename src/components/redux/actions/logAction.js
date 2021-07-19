import { ADD_LOG,REMOVE_LOG, LOAD_LOGS,DELETE_ALL_LOGS } from "../types";
import {ipcRenderer} from 'electron';

//! Add Log
export const addLog = (data) => (dispatch) => {
  dispatch({type:ADD_LOG,payload:data})
};

//! Delete cEll
export const deleteTableCell = (id) => dispatch => {
  try {
    ipcRenderer.send("delete:log",id)
    ipcRenderer.on("deleted:log",(e,log) => {
      dispatch({type:REMOVE_LOG,payload:JSON.parse(log)})
    })
  } catch (error) {
    console.log(error);
  }

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

//! Delete all logs
export const deleteAllLogs = () => dispatch => {
  console.log("delete all logs triggerdd");
  dispatch({type:DELETE_ALL_LOGS})
}
