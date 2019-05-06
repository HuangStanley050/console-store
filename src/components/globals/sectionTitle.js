import React from "react";

const SectionTitle = ({ title, message }) => {
  return (
    <div>
      <h1
        style={{ letterSpacing: "0.3rem", fontSize: "2rem", color: "#d4db0a" }}
        className="text-center"
      >
        {message}
      </h1>
      <h2
        style={{
          letterSpacing: "0.3rem",
          fontSize: "2rem",
          textTransform: "uppercase",
        }}
        className="text-center"
      >
        {title}
      </h2>
      <div className="underline" />
    </div>
  );
};

export { SectionTitle };
