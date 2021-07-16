import React from "react";
import {LowPriorityCell, HighPriorityCell, ModeratePriorityCell} from './styles';
import TableCell from "@material-ui/core/TableCell";
const PriorityColor = ({ level }) => {
  if (level === "Low") {
    return <TableCell><LowPriorityCell >{level}</LowPriorityCell></TableCell>;
  }
  if (level === "Moderate") {
    return <TableCell><ModeratePriorityCell>{level}</ModeratePriorityCell></TableCell>;
  }
  if (level === "High") {
    return <TableCell><HighPriorityCell>{level}</HighPriorityCell></TableCell>;
  }
};

export default PriorityColor;
