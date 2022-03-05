import React from "react";
import { Route, Routes } from "react-router-dom";
import Commentators from "../pages/Commentators";

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path="/commentators" element={<Commentators />} />
      </Routes>
    </div>
  );
}
