import React from 'react'
import { Navbar,Nav,Dropdown, } from 'rsuite'
import { EventDetail,Menu } from '@rsuite/icons';
import { Link } from 'react-router-dom';


export default function Navi() {

  return (
    <div ><Navbar >
    <Navbar.Brand href="#">
      RSUITE
    </Navbar.Brand>
    <Nav>
      <Nav.Item icon={<EventDetail />}><Link to="/">Home</Link></Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Dropdown title="About">
        <Dropdown.Item>Company</Dropdown.Item>
        <Dropdown.Item>Team</Dropdown.Item>
        <Dropdown.Item>Contact</Dropdown.Item>
      </Dropdown>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<Menu />}>Settings</Nav.Item>
    </Nav>
  </Navbar></div>
  )
}
