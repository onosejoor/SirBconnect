const WebServiceCard = ({src, header, text, classname}) => {
  return (
    <>
      <div className={!classname ? "webCard" : `webCard ${classname}`}>
        <div>
          <img className="webServiceImg" src={src} alt={header} />
        </div>

        <div className="webServiceText">
          <h2 className="webServiceh2">{header}</h2>
          <br />
          <p className="webText">{text}</p>
        </div>
      </div>
    </>
  );
};

export default WebServiceCard;
