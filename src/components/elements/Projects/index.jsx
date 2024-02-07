import React from "react";
import "./styles.css";
import Shadow from "../../ui/Shadow";
import projectpic from"../../../assets/projectpic.png";
import setimoandarvetor from"../../../assets/setimoandarvetor.png";
import setimoandarpic from"../../../assets/setimoandarpic.png";
import PicPage from "../../ui/PicPage";

const Page1 = () => {
  return (
    <div className="project" style={{ backgroundColor: "#f5f5f5" }}>
      <div>
        <p className="projetos">
          <b>PROJETOS</b>
        </p>
        <p className="texto">
          Este portfólio é meu primeiro projeto como Desenvolvedora Front-end,
          aqui reuni tudo que me representa como profissional e pessoa, e
          expressei junto ao UX/UI Design. Nesta revista digital temos uma
          paleta em preto e branco, pensada para ser atemporal, presando pela
          experiência de usuário intuitiva e criativa. Fortaleci minhas
          habilidades técnicas e ressaltei a importância da estética cuidadosa
          ao explorar as possibilidades visuais da combinação de cores em linhas
          e páginas que carregam variedades de diagramações, espessuras e
          tamanhos, tornando os visuais mais dinâmicos. O resultado final não
          apenas enriqueceu minha criação, como também consolidou minha paixão
          por experiências digitais interativas.
        </p>
      </div>
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
    <div className="setimoandar" style={{ backgroundColor: "#f5f5f5" }}>
      <p className="texto1">
      O 7º Andar é um aplicativo independente para amantes de cinema.
Desenvolvido por Fabiano Rabelo e eu, Laryssa Dantas. Oferece recomendações, criação de playlists e um espaço digital para compartilhar insights sobre a 7ª Arte.
      </p>
      < img src={setimoandarpic}></img>
    </div>
  );
};
const Page4 = () => {
  return (
    <div className="setimoandarvetor" style={{ backgroundColor: "#f5f5f5" }}>
      < img src={setimoandarvetor}></img>
      <p className="texto2">
Na primeira etapa, o UX/UI Design foi trabalhado para a composição visual do app e seus componentes ativos.
Ao lado temos o botão para o site do 7º Andar onde poderão fazer seu download, e o botão para acessar nosso projeto em UX/UI Design onde está contido todo processo de desenvolvimento criativo dele.
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
      </div>
      <div className="picverse pageborder" ref={ref}>
        <Shadow pageSide="right" />
        <Page2 />
      </div>
      <div className="picverse pageborder" ref={ref}>
        <Shadow pageSide="left" />
        <Page3 />
      </div>
      <div className="picverse pageborder"ref={ref}>
        <Shadow pageSide="right" />
        <Page4 />
      </div>
    </>
  );
});



export default Projects;
