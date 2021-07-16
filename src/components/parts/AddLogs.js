import React,{useState} from "react";
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
import {addLog} from '../redux/actions/logAction';
import {useDispatch} from 'react-redux';

const styles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  userInputField: {
    margin:"10px 0"
  },
  addBtn: {
    margin: "10px 0"
  }
}))

const AddLogs = () => {
  const classes = styles()
  const [newIssue, setNewIssue] = useState("")
  const [user, setUser] = useState("")
  const [priority, setPriority] = useState("Low")
  const dispatch = useDispatch()
  const addCell = () => {
  
    dispatch(addLog({ newIssue, user, priority }))
  }
  return (
    <MainContainer>
      <LogInputsBox>
        <TextField
          id="filled-basic"
          label="Add New Issue"
          variant="standard"
          fullWidth
          value={newIssue}
          onChange={(e) => setNewIssue(e.target.value)}
        />
        <TextField label="User" variant="standard" className={classes.userInputField} fullWidth value={user} onChange={(e) => setUser(e.target.value)}/>
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
        <Button fullWidth variant="contained" className={classes.addBtn} color="primary" onClick={() => addCell()}>Add</Button>
      </LogInputsBox>
    </MainContainer>
  );
};

export default AddLogs;
