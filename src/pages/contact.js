import React from "react";
//import { Link } from "gatsby"
import SEO from "../components/seo";
import Layout from "../components/layout";
import { PageHeader } from "../components/globals/header";
import image from "../images/bcg/contactBcg.jpeg";
const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={image} />
  </Layout>
);

export default ContactPage;
