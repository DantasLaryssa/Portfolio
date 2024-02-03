import React from "react";

const PicPage = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="picverse">
        <img style={{objectFit:props.objectFit&&props.objectFit}} src={props.img} alt="picverse" className="picverse"></img>
      </div>
    </div>
  );
});

export default PicPage;
