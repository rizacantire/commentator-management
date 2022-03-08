import React, { useState,useEffect } from "react";
import { commentatorList,getCommentatorAsync } from "../../redux/reduce/commentatorSlice";
import { useDispatch, useSelector } from "react-redux";
import { Select, MenuItem, Card, CardContent, Typography } from "@mui/material";
import {
  getCommentatorMatchAsync,
  commentatorMatchList
} from "../../redux/reduce/commentatorMatchSlice";
export default function CommentatorStatistics() {
  const dispatch = useDispatch();
  const getCommentators = useSelector(commentatorList);
  const getCommentatorMatchList = useSelector(commentatorMatchList);
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  useEffect( () => {
    dispatch( getCommentatorAsync());
    dispatch(getCommentatorMatchAsync());
   }, [dispatch]);
  return (
    <div >
      <Select defaultValue="" size={"small"} onChange={handleChange} style={{margin:"auto 25em",}} >
        <MenuItem value="">
          {" "}
          <em>None</em>
        </MenuItem>
        {getCommentators.map((s) => (
          <MenuItem key={s.id} value={s.id}>
            {s.firstName} {s.lastName}
          </MenuItem>
        ))}
      </Select>
      <Card sx={{ maxWidth: 600 ,margin:"15px auto"}}>
        {getCommentatorMatchList.filter(r=>r.commentatorId ===value).map(
          (res)=>
          (<CardContent>
            <Typography>{res.id}</Typography>
          </CardContent>)
        )}
        </Card>
        
    </div>
  );
}
