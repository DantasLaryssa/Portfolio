import React from "react";

const Shadow = ({ pageSide = "left" }) => {
  const styleShadow = {
    width: "7.5%",
    zIndex: 1000,
    position: "absolute",
    top: 0,
    height: "100%",
  };

  const gradientL = {
    background:
      "linear-gradient(270deg, rgba(0, 0, 0, 0.33) 0%, rgba(245, 245, 245, 0.00) 100%)",
  };
  const gradientR = {
    background:
      "linear-gradient(270deg, rgba(0, 0, 0, 0.33) 0%, rgba(245, 245, 245, 0.00) 100%)",
      transform: "scaleX(-1)"
  };

  return (
    <>
      {pageSide === "left" ? (
        <div style={{ ...styleShadow, ...gradientL, right: 0 }}></div>
      ) : (
        <div style={{ ...styleShadow, ...gradientR, left: 0 }}></div>
      )}
    </>
  );
};

export default Shadow;
