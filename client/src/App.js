import "./App.css";
import "rsuite/dist/rsuite.min.css";
import React from "react";
import Navi from "./components/layouts/Navi";
import SideNavi from "./components/layouts/SideNavi";
import { Grid, Row, Col } from "rsuite";
import Dashboard from "./components/layouts/Dashboard";

function App() {
  return (
    <div style={{ maxWidth: "1400px", margin: "auto" }}>
      <Navi />
      <Grid fluid style={{ marginLeft: "-5px" }}>
        <Row>
          <Col xs={4}>
            <SideNavi />
          </Col>

          <Col xs={20}>
            <Dashboard />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
