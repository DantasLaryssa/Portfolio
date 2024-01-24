import React from "react";
import HTMLFlipBook from "react-pageflip";
import Cover from "../../components/elements/Cover";
import "./styles.css";
import picverse from "../../assets/fotoverso.jpg";

const Picverse = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="picverse">
        <img src={picverse} alt="picverse" className="picverse"></img>
      </div>
    </div>
  );
});

const Home = () => {
  return (
    <div className="home">
      <div style={{ width: "60vw", height: "95vh" }}>
        <HTMLFlipBook width={270} height={370} showCover={false} size="stretch">
          <div  className="picverse" style={{backgroundColor:"blue"}}>teste</div>
          <Cover />
          <Picverse />
          <div  className="picverse" style={{backgroundColor:"blue"}}>teste</div>
          <div>Pag. 2</div>
          <div>Pag. 3</div>
          <div>Pag. 4</div>
          <div>Pag. 5</div>
          <div>Pag. 6</div>
          <div>Pag. 7</div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Home;
