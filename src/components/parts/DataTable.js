import React from "react";
import { MainContainer } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PriorityColor from './PriorityColor';
import { Button } from "@material-ui/core";
import {DeleteForever} from '@material-ui/icons';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTableCell} from '../redux/actions/logAction';

const useStyles = makeStyles({
  tableHead: {
    fontWeight: "bold",
  },
  tableContainer : {
    boxShadow: "-4px 0px 15px -4px #888"
  }
  // table: {
  //   minWidth: 650,
  // },
});

// const data = [
//   {
//     id: 1,
//     text: "Log Text One",
//     priority: "Low",
//     user: "Saman",
//     created: new Date().toString(),
//   },
//   {
//     id: 2,
//     text: "Log Text two",
//     priority: "Moderate",
//     user: "Saman",
//     created: new Date().toString(),
//   },
//   {
//     id: 3,
//     text: "Log Text three",
//     priority: "High",
//     user: "Saman",
//     created: new Date().toString(),
//   },
// ];

const DataTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const logs = useSelector(state => state.logs.logs)

  const deleteCell = (id) => {
   // console.log(id);
    dispatch(deleteTableCell(id))
  }
  console.log(logs)
  return (
    <MainContainer>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Priority</TableCell>
              <TableCell className={classes.tableHead} align="right">
                Issue Text
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                User
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                Created
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((item) => (
              <TableRow key={item.id}>
                <PriorityColor level={item.priority}/>
                <TableCell align="right">{item.text}</TableCell>
                <TableCell align="right">{item.user}</TableCell>
                <TableCell align="right">{item.created}</TableCell>
                <TableCell align="right"><Button variant="contained" color="secondary" onClick={() => deleteCell(item.id)}><DeleteForever/></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainContainer>
  );
};

export default DataTable;
