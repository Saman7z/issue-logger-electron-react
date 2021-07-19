import React, { useEffect, useState } from "react";
import {
  FormControl,
  TextField,
  InputLabel,
  NativeSelect,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MainContainer, LogInputsBox } from "./styles";

import { useDispatch } from "react-redux";
import {ipcRenderer} from 'electron';

const styles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  userInputField: {
    margin: "10px 0",
  },
  addBtn: {
    margin: "10px 0",
  },
}));

const AddLogs = () => {
  const classes = styles();
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [priority, setPriority] = useState("Low");
  const addCell = () => {
    if (text.trim() === "" || user.trim() === "" || priority === "") {
      alert("Please Enter all the fields");
    } else {
      ipcRenderer.send("add:logs",{ text, user, priority })
   //   dispatch(addLog({ text, user, priority }));
    }
  };

  return (
    <MainContainer>
      <LogInputsBox>
        <TextField
          id="filled-basic"
          label="Add New Issue"
          variant="standard"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          label="User"
          variant="standard"
          className={classes.userInputField}
          fullWidth
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Select Priority
          </InputLabel>
          <NativeSelect
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </NativeSelect>
        </FormControl>
        <Button
          fullWidth
          variant="contained"
          className={classes.addBtn}
          color="primary"
          onClick={() => addCell()}
        >
          Add
        </Button>
      </LogInputsBox>
    </MainContainer>
  );
};

export default AddLogs;
