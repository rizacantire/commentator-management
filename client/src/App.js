import "./App.css";
import React from "react";
import { Grid } from "@mui/material";
import SideNavi from "./components/layouts/SideNavi";
import Header from "./components/layouts/Header"
import Dashboard from "./components/layouts/Dashboard";
function App() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header/>
        </Grid>

        <Grid item xs={3}>
          <SideNavi/>
        </Grid>
        <Grid item xs={9}>
          <Dashboard/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
