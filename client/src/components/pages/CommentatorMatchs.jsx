import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCommentatorMatchAsync,
  commentatorMatchList,
} from "../../redux/reduce/commentatorMatchSlice";
export default function CommentatorMatchs() {
  const dispatch = useDispatch();
  const getData = useSelector(commentatorMatchList);
  console.log(getData);
  useEffect(() => {
    dispatch(getCommentatorMatchAsync());
  }, [dispatch]);

  return (
    <div>
     detay
    </div>
  );
}
