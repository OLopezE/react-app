import React from 'react'
import {Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, NavbarBrand} from 'reactstrap'

export default function Navigationbar() {
  return (
    <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed=""
  >
    <NavbarBrand href="/">
      LOGO
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />

  </Navbar>
</div>
  )
}
