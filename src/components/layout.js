/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./globals/navigation";

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
