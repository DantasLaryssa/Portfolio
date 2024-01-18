import React from "react";
import HTMLFlipBook from "react-pageflip";
import Cover from "../../components/elements/Cover";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <div style={{width : "60vw", height : "95vh"  }}>
        <HTMLFlipBook width={270} height={370} showCover = {true} size = "stretch" >
            < Cover/>
            < Cover number = {1}/>
            < Cover number = {2}/>
            < Cover number = {3}/>


 
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Home;
