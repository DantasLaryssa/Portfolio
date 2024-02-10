import React from "react";
import skillsgroup from "../../../assets/Skillsgroup.png"
import skillspic from "../../../assets/skillspic.png"
import PicPage from "../../ui/PicPage";
import Shadow from "../../ui/Shadow";
import texturemagazine from "../../../assets/texturemagazine.jpg";


const Page1 = () => {
  return <div className="picverse" style={{backgroundColor: "#f5f5f5"}}>
    <PicPage img={skillsgroup}/>
    <img src={texturemagazine} alt="texture" className="texture2" />
  </div>;
};

const Page2 = () => {
  return <div className="skillspic">
  <PicPage objectFit={"cover"} img={skillspic}/>
  <img src={texturemagazine} alt="texture" className="texture" />
    </div>;
};

const Skills = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="picverse pageborder" ref={ref}>
        <Shadow pageSide="left"/>
        <Page1 />
      </div>
      <div className="picverse pageborder" ref={ref}>
        <Shadow pageSide="right"/>
        <Page2 />
      </div>
    </>
  );
});

export default Skills;
