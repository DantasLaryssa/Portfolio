import React from "react";
import "./styles.css";
import picportfolio from "../../../assets/fotoportfolio1.png";
import picfrontend from "../../../assets/Frontendpic.png";
import uxpic from "../../../assets/Uxpic.png";
import cbpic from "../../../assets/codigodebarra.png";
import texturemagazine from "../../../assets/texturemagazine.jpg";

const Cover = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="cover">
        <img src={picportfolio} alt="Capa" className="picportfolio" />
        <img src={picfrontend} alt="frontend" className="picfrontend" />
        <img src={uxpic} alt="ux/ui" className="uxpic" />
        <a href="https://www.linkedin.com/in/dantaslaryssa/">
          <img src={cbpic} alt="codigo de barra" className="cbpic" />
        </a>
        <div className="content">
          <div>
            <p className="title1">PORTFÓLIO</p>
            <p className="p1">SÃO PAULO</p>
          </div>

          <div>
            <p className="p2" style={{ color: "#afafaf" }}>
              DESENVOLVIDO por
            </p>
            <div>
              <p className="title2" style={{ color: "#afafaf" }}>
                LARYSSA DANTAS VIEIRA
              </p>
            </div>
            <p className="p3" style={{ color: "#afafaf" }}>
              Desenvolvedora FRONT-END
            </p>
            <p className="p3" style={{ color: "#afafaf" }}>
              & UX/UI Designer
            </p>
          </div>
        </div>
        <img src={texturemagazine} alt="texture" className="texture" />
      </div>
    </div>
  );
});

export default Cover;
