import React from "react";
import "./styles.css";
import Shadow from "../../ui/Shadow";
import projectpic from"../../../assets/projectpic.png";
import setimoandarvetor from"../../../assets/setimoandarvetor.png";
import setimoandarpic from"../../../assets/setimoandarpic.png";
import PicPage from "../../ui/PicPage";
import texturemagazine from "../../../assets/texturemagazine.jpg";


const Page1 = () => {
  return (
    <div className="project" style={{ backgroundColor: "#f5f5f5" }}>
        <p className="projetos">
          <b>PROJETOS</b>
        </p>
        <p className="texto">
          Este portfólio é meu primeiro projeto como Desenvolvedora Front-End,
          aqui reuni tudo que me representa como profissional e pessoa e
          expressei junto ao UX/UI Design. Nesta revista digital temos uma
          paleta em preto e branco atemporal, que preza pela
          experiência de usuário intuitiva, criativa e clássica. Fortaleci minhas
          habilidades técnicas e ressaltei a importância da estética cuidadosa
          ao explorar as possibilidades visuais da combinação de cores em linhas
          e páginas que carregam variedades de diagramações, espessuras e
          tamanhos, tornando os visuais mais dinâmicos. O resultado final não
          apenas enriqueceu minha criação, como também consolidou minha paixão
          por experiências digitais interativas. 
        </p>

    </div>
  );
};

const Page2 = () => {
  return (
    <div className="projectpic" style={{ backgroundColor: "#f5f5f5" }}>
      <PicPage img={projectpic} />
    </div>
  );
};

const Page3 = () => {
  return (
    <div className="setimoandar picverse" style={{ backgroundColor: "#f5f5f5" }}>
      <p className="texto1">
      O 7º Andar é um <strong>aplicativo independente</strong> para amantes de cinema e foi
desenvolvido por Fabiano Rabelo e eu, Laryssa Dantas. Oferece recomendações, criação de playlists e um espaço digital para compartilhar insights sobre a 7ª Arte. <strong>Fui responsável pelo seu UX/UI Design </strong>e conceitos criativos...   
      </p>
      < img src={setimoandarpic} className="setimoandarpicture"></img>
    </div>
  );
};
const Page4 = () => {
  return (
    <div className="setimoandarvetor picverse"  style={{ backgroundColor: "#f5f5f5" }}>
      < img src={setimoandarvetor} className="vetor"></img>
      <p className="texto2">
Nessa primeira etapa foram trabalhados a <strong>composição visual do app </strong>e seus componentes ativos.
Ao lado temos o <strong>botão para acessar seu esboço</strong>, onde estão contidas todas as ideias que o originaram e seus processos estéticos. <strong>Em breve</strong> estará pronto para download. 
      </p>
    </div>
  );
};

const Projects = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="picverse pageborder" ref={ref}>
        <Shadow pageSide="left" />
        <Page1 />
        <img src={texturemagazine} alt="texture" className="texture2" />
      </div>
      <div className="picverse pageborder" ref={ref}>
        <Shadow pageSide="right" />
        <Page2 />
        <img src={texturemagazine} alt="texture" className="texture" />
      </div>
      <div className="setimoandar pageborder" ref={ref}>
        <Shadow pageSide="left" />
        <Page3 />
        <img src={texturemagazine} alt="texture" className="texture2" />
      </div>
      <div className="picverse pageborder"ref={ref}>
        <Shadow pageSide="right" />
        <Page4 />
        <img src={texturemagazine} alt="texture" className="texture2" />
      </div>
    </>
  );
});



export default Projects;
