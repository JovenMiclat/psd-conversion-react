import React from "react";
import FlexDiv from "./FlexDiv";

const FlexContent = ({
  firstDiv,
  title,
  titleClass,
  desc,
  descClass,
  secondDiv,
  imgSrc,
}) => {
  return (
    <div className="row pt-5">
      <FlexDiv
        firstDiv={firstDiv}
        title={title}
        titleClass={titleClass}
        desc={desc}
        descClass={descClass}
        secondDiv={secondDiv}
        imgSrc={imgSrc}
      />
    </div>
  );
};

export default FlexContent;
