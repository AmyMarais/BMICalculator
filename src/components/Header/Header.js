import React from "react";
//import navbar components from reactstrap
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar style={{"padding" : "15px"}} color="dark" dark expand="md">
        <NavbarBrand href="/">BMI Calculator</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/learnmore">Learn More </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
