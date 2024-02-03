import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";
import CustomSwitch from "../../components/ui/CustomSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faEnvelope,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faBehanceSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Cover from "../../components/elements/Cover";
import Education from "../../components/elements/Education";
import Information from "../../components/elements/Information";
import Projects from "../../components/elements/Projects";
import Skills from "../../components/elements/Skills";

const Home = () => {
  const book = useRef();

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [bookPage, setBookPage] = useState(0);

  const handleTheme = () => {
    return `theme-${isSwitchOn ? "light" : "dark"}`;
  };

  const handleChangePage = (e) => {
    setBookPage(e.data);
  };

  const handleButtons = () => {
    switch (bookPage) {
      case 2:
        return <BtnsInfo />;
      case 4:
        return (        
        <div  onClick={() => {
          window.open("https://drive.usercontent.google.com/uc?id=13mnIER3dtaQANfb7yIGVyUp6D0WwWsqx&export=download");
        }}>
          <p className="download-cv" style={{color:isSwitchOn ? "#000" : "#f5f5f5"}}>
            DOWNLOAD-CV
          </p>
          <FontAwesomeIcon 
            icon={faFileArrowDown}
            color={isSwitchOn ? "#000" : "#f5f5f5"}
            
            />
            </div>
          
        );

      default:
        return <></>;
    }
  };

  const BtnsInfo = () => {
    return (
      <>
        <FontAwesomeIcon
          onClick={() => {
            window.open("https://www.behance.net/dantaslaryssa");
          }}
          icon={faBehanceSquare}
          color={isSwitchOn ? "#000" : "#f5f5f5"}
        />
        <FontAwesomeIcon
          onClick={() => {
            window.open("https://github.com/DantasLaryssa");
          }}
          icon={faGithub}
          color={isSwitchOn ? "#000" : "#f5f5f5"}
        />
        <FontAwesomeIcon
          onClick={() => {
            window.open("https://www.linkedin.com/in/dantaslaryssa/");
          }}
          icon={faLinkedin}
          color={isSwitchOn ? "#000" : "#f5f5f5"}
        />
        <FontAwesomeIcon
          onClick={() => {
            window.open("mailto:dantaslaryssa@gmail.com");
          }}
          icon={faEnvelope}
          color={isSwitchOn ? "#000" : "#f5f5f5"}
        />
      </>
    );
  };

  return (
    <div className={`home ${handleTheme()}`}>
      <div className="switch-theme">
        <FontAwesomeIcon
          icon={faMoon}
          color={isSwitchOn ? "#000" : "#f5f5f5"}
          style={{ fontSize: 12 }}
        />
        <CustomSwitch checked={isSwitchOn} setChecked={setIsSwitchOn} />
        <FontAwesomeIcon
          icon={faSun}
          color={isSwitchOn ? "#000" : "#f5f5f5"}
          style={{ fontSize: 12 }}
        />
      </div>
      <div className="book" style={{}}>
        <div className={`summary summary-${handleTheme()}`}>
          <p>CAPA</p>
          <p>INFORMAÇÕES</p>
          <p>HABILIDADES</p>
          <p>EDUCAÇÃO</p>
          <p>PROJETOS</p>
        </div>
        <HTMLFlipBook
          ref={book}
          showCover={false}
          width={100}
          height={150}
          size="stretch"
          style={{ marginTop: "-1vh", marginLeft: -20 }}
          id="htmlflipbook"
          onFlip={handleChangePage}
        >
          <div className={`picverse ${handleTheme()}`} />
          <Cover />
          <Information />
          <Skills />
          <Education />
          <Projects />
          <div className={`picverse ${handleTheme()}`} />
        </HTMLFlipBook>
        <div className="buttons">{handleButtons()}</div>
      </div>
    </div>
  );
};

export default Home;
