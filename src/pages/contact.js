import React from "react";
//import { Link } from "gatsby"
import SEO from "../components/seo";
import Layout from "../components/layout";
import { PageHeader } from "../components/globals/header";
import Banner from "../components/globals/banner";
import image from "../images/bcg/contactBcg.jpeg";
const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={image}>
      <Banner title="Contact us" subtitle="more information" />
    </PageHeader>
  </Layout>
);

export default ContactPage;
