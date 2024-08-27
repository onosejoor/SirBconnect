import { useState } from "react";

const WhatsNewCard = ({ header, text, src, text2, category }) => {
  const [seeMore, setSeeMore] = useState(false);
  function setSee() {
    setSeeMore((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <div
        className={seeMore ? "whatsNewContainer expand" : "whatsNewContainer"}
      >
        {!seeMore && (
          <div className="whatsNewImg">
            <img
              src={src || "https://picsum.photos/id/870/200/300?grayscale"}
              alt="random"
            />
          </div>
        )}

        <div className="whatsNewTextCon">
          <div>
            {" "}
            <div className="date">
              {" "}
              <h5 className="whatsNewDate">23-August-2024 | </h5>
              <span className="category">{category}</span>
            </div>
          </div>
          <div>
            {" "}
            <h2 className="whatsNewHeader">{header}</h2>
          </div>
          <div>
            {" "}
            <p className="whatsNewText">{seeMore ? text2 : text}</p>
          </div>

          {/* <a href="#contact" className="whatsNewLink">
            {" "}
            <button className="linkButton">Contact Us</button>
          </a> */}
          <button className="linkButton whatsNewLink" onClick={setSee}>
           {seeMore ? "See Less"  : "See more"}
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsNewCard;
