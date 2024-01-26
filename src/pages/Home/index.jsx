import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";
import CustomSwitch from "../../components/ui/CustomSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import Cover from "../../components/elements/Cover";
import Education from "../../components/elements/Education";
import Information from "../../components/elements/Information";
import Projects from "../../components/elements/Projects";
import Skills from "../../components/elements/Skills";

const Home = () => {
  const book = useRef();

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleTheme = () => {
    return `theme-${isSwitchOn ? "light" : "dark"}`;
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
      <div className="book">
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
          style={{ marginTop: "-1vh" }}
          id="htmlflipbook"
        >
          <div className={`picverse ${handleTheme()}`} />
          <Cover />
          <Information />
          <Skills />
          <Education />
          <Projects />
          <div className={`picverse ${handleTheme()}`} />
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Home;
