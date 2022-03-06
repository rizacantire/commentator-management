import React from "react";
import { Route, Routes } from "react-router-dom";
import CommentatorMatchs from "../pages/CommentatorMatchs";
import Commentators from "../pages/Commentators";
import Matchs from "../pages/Matchs";

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path="/spiker" element={<Commentators />} />
        <Route exact path="/mac" element={<CommentatorMatchs />} />
        <Route exact path="/macdetay" element={<Matchs />} />
      </Routes>
    </div>
  );
}
