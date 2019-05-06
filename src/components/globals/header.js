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
    objectFit: "cover",
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

const PageHeader = ({ img, children }) => {
  const headerStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "60vh",
    objectFit: "cover",
  };
  return (
    <section>
      <Container style={{ padding: "0px" }} fluid>
        <Jumbotron style={headerStyle} fluid>
          {children}
        </Jumbotron>
      </Container>
    </section>
  );
};

HomeHeader.defaultProps = {
  img: image,
};

export { HomeHeader, PageHeader };
