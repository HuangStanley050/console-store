import React from "react";
//import { Container, Row, Col } from "reactstrap";
import { SectionTitle } from "../globals/sectionTitle";
import SectionButton from "../globals/sectionButton";

const QuickInfo = props => {
  const wrapperStyle = {
    padding: "2rem 0",
    width: "90vw",
    margin: "0 auto",
  };
  return (
    <section style={wrapperStyle}>
      <SectionTitle title="Mission Statement" message="let us tell you" />
      <p className="text-center">
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </p>
      <SectionButton name="about" />
    </section>
  );
};

export default QuickInfo;
