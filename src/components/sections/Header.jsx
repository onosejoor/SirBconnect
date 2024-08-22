import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section id="header" className="header">
        <div className="head-container">
          <h3 className="top"> Your Premier Source for Quality Services </h3>
          <h1 className="h1Text">
            Boost your research productivity with{" "}
            <span className="comName">SirBconnect</span> today!
          </h1>

          <Link to="#contact" >
            <button className="contact"> Contact Us </button>
          </Link>
        </div>

        <img
          className="headerIMG"
          src="/images/header.png"
          alt="Man researching"
        />
      </section>
    </>
  );
}

export default Header;
