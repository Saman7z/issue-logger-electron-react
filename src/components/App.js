import React, { useEffect } from "react";
import AddLogs from "./parts/AddLogs";
import DataTable from "./parts/DataTable";
import {useDispatch} from 'react-redux';
import { ipcRenderer } from "electron";
import { addLog } from "../components/redux/actions/logAction";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    ipcRenderer.on("new:log", (e, log) => {
      dispatch(addLog(JSON.parse(log)));
    });
  }, []);
  return (
    <div className="app">
      <AddLogs />
      <DataTable />
    </div>
  );
};

export default App;
