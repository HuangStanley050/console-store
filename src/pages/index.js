import React from "react";
//import { Link } from "gatsby"

import Layout from "../components/layout";

import SEO from "../components/seo";
import { HomeHeader } from "../components/globals/header";
import Banner from "../components/globals/banner";
import BannerButton from "../components/globals/bannerButton";
import QuickInfo from "../components/Home/quickinfo";
import image from "../images/bcg/homeBcg.jpeg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={image}>
      <Banner title="GameShop" subtitle="223 Fiction Street">
        <BannerButton name="product" />
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
);

export default IndexPage;
