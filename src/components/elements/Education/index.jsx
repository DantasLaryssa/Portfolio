import React from "react";
import educationpic from "../../../assets/educationpic.png";
import "./styles.css";
import Shadow from "../../ui/Shadow";

const Page1 = () => {
  return (
    <div className="educationpic" style={{ backgroundColor: "#f5f5f5" }}>
      <img src={educationpic} alt="educationpic" className="educationpicture" />
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="education" style={{ backgroundColor: "#f5f5f5" }}>
      <div>
        <p>
          <b>Ciência da Computação.</b>
        </p>
        <p>Centro Universitário FMU.</p>
        <p>3º semestre. (01/2023 - Formação prevista para 12/2026).</p>
      </div>
      <div>
        <p>
          <b>Design de Moda.</b> 
        </p>
        <p>Centro Universitário FAM.</p>
        <p> 01/2019 - 12/2020.</p>
      </div>
      <div>
        <p>
          <b>Trilha Digital | Web Front-End.</b>
        </p>
        <p>Bolsas Santander Coders 2023.2 |Front-End.</p>
        <p>Concluído em 11/2023. (15 h).</p>
      </div>
      <div>
        <p>
          <b>Robô com Arduino e Impressão 3D.</b>
        </p>
        <p>EMOTEC – Fábrica de Criações Tecnológicas, FMU.</p>
        <p>Concluído em 11/2023. (30h).</p>
      </div>
    </div>
  );
};

const Education = React.forwardRef((props, ref) => {
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

export default Education;
