const WhatsNewCard = ({ header, text, src }) => {
  return (
    <>
      <div className="whatsNewContainer">
        <div className="whatsNewImg">
          <img
            src={src || "https://picsum.photos/id/870/200/300?grayscale"}
            alt="random"
          />
        </div>
        <div className="whatsNewTextCon">
          <div>
            {" "}
            <h5 className="whatsNewDate">23-August-2024 | WAEC</h5>
          </div>
          <div>
            {" "}
            <h2 className="whatsNewHeader">{header}</h2>
          </div>
          <div>
            {" "}
            <p className="whatsNewText">{text}</p>
          </div>

          <a href="#contact" className="whatsNewLink">
            {" "}
            <button className="linkButton">Contact Us</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsNewCard;
