import React from "react";
import { Button } from "reactstrap";
import { Link } from "gatsby";

const BannerButton = ({ name }) => {
  return (
    <Button
      className="hovereffect"
      size="lg"
      outline
      style={{ color: "white" }}
    >
      <Link
        to="/products"
        style={{
          textTransform: "uppercase",
          color: "white",
          textDecoration: "none",
          fontWeight: "700",
        }}
      >
        {name}
      </Link>
    </Button>
  );
};
export default BannerButton;
