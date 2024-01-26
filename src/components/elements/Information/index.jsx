import React from "react";
import PicPage from "../../ui/PicPage";

import picverse from "../../../assets/fotoverso.jpg";
import infopic from "../../../assets/infopic.png";
import "./styles.css";

const Page1 = () => {
  return (
    <div className="picverse">
      <PicPage img={picverse} />
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
          Sou de São Paulo e utilizo a<strong> tecnologia </strong>de forma
          criativa! Em 2020 me formei em Design de moda e atualmente curso
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
      <div className="picverse" ref={ref}>
        <Page1 />
      </div>
      <div className="picverse" ref={ref}>
        <Page2 />
      </div>
    </>
  );
});

export default Information;
