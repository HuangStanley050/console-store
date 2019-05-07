import React, { Component } from "react";
import NavigationLinks from "./navigationLinks";
import NavigationIcons from "./navigationIcons";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

class Navigation extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav>
        <Navbar
          style={{ backgroundColor: "rgba(50, 115, 220, 0.3)" }}
          light
          expand="md"
        >
          <NavbarBrand tag={Link} to="/">
            <div
              style={{
                border: "2px solid black",
                padding: "0.5rem",
                fontWeight: "bold",
              }}
            >
              GameShop
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavigationLinks />
          </Collapse>
          <NavigationIcons />
        </Navbar>
      </nav>
    );
  }
}

export default Navigation;
