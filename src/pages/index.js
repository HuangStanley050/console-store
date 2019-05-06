import React from "react";
//import { Link } from "gatsby"

import Layout from "../components/layout";

import SEO from "../components/seo";
import { HomeHeader } from "../components/globals/header";
import image from "../images/bcg/homeBcg.jpeg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={image}>hi there</HomeHeader>
  </Layout>
);

export default IndexPage;
