import React from "react";
import "./styles.css";
import picportfolio from "../../../assets/fotoportfolio1.png";

const Cover = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="cover">
        <img src={picportfolio} alt="Capa" className="picportfolio" />
        <div className="content">
          <div>
            <p className="title1">PORTFÓLIO</p>
          </div>

          <div>
            <p className="title2" style={{color : "#fff"}}>LA</p>
            <p className="title2">RYSSA DANTAS VIEIRA</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cover;
