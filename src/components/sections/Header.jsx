function Header() {
  return (
    <>
      <section id="header" className="header">
        <div className="head-container">
          <h2 className="top"> Your top choice of quality services </h2>
          <h1 className="h1Text">
            Boost your research productivity with{" "}
            <span className="comName">SirBconnect</span> today!
          </h1>

          <a href="#contact">
            <button className="contact"> Contact Us </button>
          </a>
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
