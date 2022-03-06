import React from "react";
import { Sidenav, Nav, Dropdown } from "rsuite";
import { Dashboard, DoingRound, Image, Gear } from "@rsuite/icons";
import { Link } from "react-router-dom";

export default function SideNavi() {
  return (
    <div>
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item as={Link} to="/spiker"  eventKey="1" icon={<Dashboard />}>
             
           Spikerler
            </Nav.Item>
            <Nav.Item as={Link} to="/macdetay" eventKey="2" icon={<DoingRound />}>
             Maç Detay
            </Nav.Item>
            <Dropdown eventKey="3" title="Advanced" icon={<Image />}>
              <Dropdown.Item as={Link} to="/maclar" eventKey="3-1">Maçlar</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
              <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
              <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
            </Dropdown>
            <Dropdown eventKey="4" title="Settings" icon={<Gear />}>
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
              <Dropdown.Menu eventKey="4-5" title="Custom Action">
                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
