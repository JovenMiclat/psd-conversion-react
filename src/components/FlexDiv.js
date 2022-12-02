const FlexDiv = ({
  firstDiv,
  title,
  titleClass,
  desc,
  descClass,
  secondDiv,
  imgSrc,
}) => {
  return (
    <>
      <div className={firstDiv}>
        <h5 className={titleClass}> {title} </h5>
        <p className={descClass}>{desc}</p>
      </div>
      <div className={secondDiv}>
        <img className="img-fluid" src={imgSrc} />
      </div>
    </>
  );
};

export default FlexDiv;
