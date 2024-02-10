import React from "react";
import PicPage from "../../ui/PicPage";

import picverse from "../../../assets/fotoverso.jpg";
import infopic from "../../../assets/infopic.png";
import "./styles.css";
import Shadow from "../../ui/Shadow";
import texturemagazine from "../../../assets/texturemagazine.jpg";

const Page1 = () => {
  return (
    <div className="picverse">
      <PicPage img={picverse} />
        <img src={texturemagazine} alt="texture" className="texture" />
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="picverse page2">
      <div>
        <img src={infopic}></img>
      </div>
      <div>
        <p className="information-p">
          Olá, me chamo Laryssa! Sou de São Paulo e utilizo a
          <strong> tecnologia </strong>de forma criativa! Me formei em 2020 em
          Design de Moda e atualmente curso
          <strong> Ciência da Computação</strong>.
          <br />
          Desenvolvi esta
          <strong> revista digital </strong>para compartilhar minha jornada no
          <strong> FRONT-END </strong>e no<strong> UX/UI DESIGN</strong>.
          <br />
          Te convido a acompanhar meu percurso!
          <br />
          <br />
          <b>Email:</b>
          <br />
          <span>dvlaryssa@gmail.com</span>
          <br />
          <b>Linkedin:</b>
          <br />
          <span>linkedin.com/in/dantaslaryssa</span>
          <br />
          <b>GitHub:</b>
          <br />
          <span>github.com/DantasLaryssa</span>
          <br />
          <b>Behance:</b>
          <br />
          <span>behance.net/dantaslaryssa</span>
        </p>
      </div>
    </div>
  );
};

const Information = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="picverse pageborder" ref={ref}>
        <Shadow pageSide="left"/>
        <Page1 />
      </div>
      <div className="picverse pageborder" ref={ref}>
        <Shadow pageSide="right"/>
        <Page2 />
        <img src={texturemagazine} alt="texture" className="texture2" />
      </div>
    </>
  );
});

export default Information;
