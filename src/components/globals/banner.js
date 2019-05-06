import React from "react";

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="mb-3 text-center">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      {children}
    </div>
  );
};

Banner.defaultProps = {
  title: "default title",
  subtitle: "default subtitle",
};

export default Banner;
