import React from "react";
//import { Link } from "gatsby"
import SEO from "../components/seo";
import Layout from "../components/layout";
import { PageHeader } from "../components/globals/header";
import image from "../images/bcg/aboutBcg.jpeg";
import Banner from "../components/globals/banner";
const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={image}>
      <Banner title="about" subtitle="about us" />
    </PageHeader>
  </Layout>
);

export default AboutPage;
