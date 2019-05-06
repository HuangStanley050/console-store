import React from "react";
import { Jumbotron, Container } from "reactstrap";
import image from "../../images/bcg/homeBcg.jpeg";

const HomeHeader = ({ img, children }) => {
  const jumbotronStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section>
      <Container style={{ padding: "0px" }} fluid>
        <Jumbotron style={jumbotronStyle} fluid>
          {children}
        </Jumbotron>
      </Container>
    </section>
  );
};

const PageHeader = () => {
  return null;
};

HomeHeader.defaultProps = {
  img: image,
};

export { HomeHeader, PageHeader };
