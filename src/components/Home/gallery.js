import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/xboxone.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/dreamcast.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/playstation.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Gallery = props => {
  const wrapperStyle = {
    padding: "2rem 0",
    width: "90vw",
    margin: "0 auto",
  };
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid;
        const img2 = data.img2.childImageSharp.fluid;
        const img3 = data.img3.childImageSharp.fluid;
        return (
          <section style={wrapperStyle}>
            <div className="item item1">
              <Img fluid={img1} />
              <p>awesome stuff</p>
            </div>
            <div className="item item2">
              <Img fluid={img2} />
              <p>awesome stuff</p>
            </div>
            <div className="item item3">
              <Img fluid={img3} />
              <p>awesome stuff</p>
            </div>
          </section>
        );
      }}
    />
  );
};

export default Gallery;
