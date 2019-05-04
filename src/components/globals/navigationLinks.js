import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "gatsby";

class NavigationLinks extends Component {
  state = {
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
      {
        id: 3,
        path: "/products",
        text: "Products",
      },
      {
        id: 4,
        path: "/contact",
        text: "Contact",
      },
    ],
  };
  render() {
    return (
      <Nav className="mx-auto" navbar>
        {this.state.links.map(link => {
          return (
            <NavItem key={link.id}>
              <NavLink
                className="font-weight-bold hovereffect"
                style={{ fontSize: "1.5rem", color: "black" }}
                tag={Link}
                to={link.path}
              >
                {link.text}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    );
  }
}

export default NavigationLinks;
