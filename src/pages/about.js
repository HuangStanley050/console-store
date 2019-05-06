import React from "react";
//import { Link } from "gatsby"
import SEO from "../components/seo";
import Layout from "../components/layout";
import { PageHeader } from "../components/globals/header";
import image from "../images/bcg/aboutBcg.jpeg";
const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={image}>
      <h1>About page</h1>
    </PageHeader>
  </Layout>
);

export default AboutPage;
