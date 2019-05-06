import React from "react";
//import { Container, Row, Col } from "reactstrap";
import { SectionTitle } from "../globals/sectionTitle";

const QuickInfo = props => {
  const wrapperStyle = {
    padding: "2rem 0",
    width: "90vw",
    margin: "0 auto",
  };
  return (
    <section style={wrapperStyle}>
      <SectionTitle title="Mission Statement" message="let us tell you" />
    </section>
  );
};

export default QuickInfo;
