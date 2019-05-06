import React from "react";
//import { Link } from "gatsby"
import SEO from "../components/seo";
import Layout from "../components/layout";
import { PageHeader } from "../components/globals/header";
import Banner from "../components/globals/banner";
import image from "../images/bcg/productsBcg.jpeg";
const ProductsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={image}>
      <Banner title="products" subtitle="our products" />
    </PageHeader>
  </Layout>
);

export default ProductsPage;
