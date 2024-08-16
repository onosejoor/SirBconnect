const AboutText = (props) => {
  return (
    <>
        <div>
          <p className="webAboutText">
            At <span className="comName">SirBconnect</span>, {props.text}
          </p>
        </div>
        <img
        className={props.class}
          loading="lazy"
          src={props.src}
          alt="Computer with a HTML, CSS, AND JAVASCRIPT write-up"
        />
    </>
  );
};


export default AboutText;