import React from "react";

const Page1 = () => {
  return <div></div>;
};

const Page2 = () => {
  return <div></div>;
};

const Skills = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}><Page1/></div>
      <div ref={ref}><Page2/></div>
    </>
  );
});

export default Skills;
