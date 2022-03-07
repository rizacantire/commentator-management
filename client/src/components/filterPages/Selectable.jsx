import React from "react";
import {commentatorList} from "../../redux/reduce/commentatorSlice";
import { useSelector } from "react-redux";
import {Select,MenuItem} from "@mui/material"

export default function Selectable() {
  const getCommentators = useSelector(commentatorList);
  return (
    <div>
      <Select size={"small"} >
      <MenuItem value="" > <em>None</em></MenuItem>
         {getCommentators.map((s) => (
          <MenuItem value={s.id}>{s.firstName} {s.lastName}</MenuItem>
        ))} 
      </Select>
    </div>
  );
}
