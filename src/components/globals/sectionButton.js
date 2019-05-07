import React from "react";
import { Button } from "reactstrap";
import { Link } from "gatsby";
const SectionButton = props => {
  return (
    <div className="text-center mt-3">
      <Button
        className="hovereffect"
        size="lg"
        outline
        style={{ color: "blue" }}
      >
        <Link
          to="/about"
          style={{
            textTransform: "uppercase",
            color: "black",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          {props.name}
        </Link>
      </Button>
    </div>
  );
};

export default SectionButton;
