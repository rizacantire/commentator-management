import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from '@mui/material/TablePagination';

import { useSelector, useDispatch } from "react-redux";
import {
  getMatchsAsync,
  matchList,
} from "../../redux/reduce/matchSlice";

export default function Matchs() {
  const dispatch = useDispatch();
  const getData = useSelector(matchList);
  useEffect(() => {
    dispatch(getMatchsAsync());
  }, [dispatch]);
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Ev Sahibi</TableCell>
              <TableCell>Konuk Takım</TableCell>
              <TableCell>Skor</TableCell>
              {/* <TableCell>Anlatan</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {getData.map((data) => (
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell align="left">{data.homeId}</TableCell>
                <TableCell align="left">{data.awayId}</TableCell>
                <TableCell align="left">{data.season}</TableCell>
                {/* <TableCell align="left">{data.commentator.firstName} {data.commentator.lastName}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
