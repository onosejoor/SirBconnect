import AboutText from "../../snippets/AboutText";
import HeaderCard from "../../snippets/HeaderCard";
import ReviewCard from "../../snippets/ReviewCard";
import WebServiceCard from "../../snippets/WebServiceCard";

const Job = () => {
  return (
    <>
      <section id="webHeader">
        <HeaderCard
          text="Crafting the Digital
              Future, One Line of Code at a Time"
          src="/images/Router/webHeader.png"
          motto="From concept to code, we create seamless digital experiences."
          class="webHead"
        />
      </section>

      <section id="webAboutsection">
        <h2 className="graphicAboutHeader">
          {" "}
          <span className="comName">SirBconnect:</span> Your Web Development
          Partner
        </h2>

        <div className="design-container webAbout">
          <AboutText
            src="/images/Router/webAbout.png"
            text=" we specialize in
              transforming your digital vision into reality. Our team of expert
              developers, designers, and strategists is dedicated to creating
              innovative, responsive, and user-friendly websites. We focus on
              delivering top-notch web solutions that drive growth and success
              for businesses of all sizes."
          />
        </div>
      </section>

      <section id="webServices">
        <h2 className="top"> Our Services </h2>

        <div className="webService">
          <WebServiceCard
            header="Web Development"
            text={`Bring your ideas to life with
              SirBconnect’s
            web development services. Our team of skilled developers builds robust, scalable, and high-performance websites tailored to your business needs, from front-end to back-end development.`}
            src="/images/Router/Services/web-development.png"
          />

          <WebServiceCard
            header="Web Design"
            text="Transform your online presence with our cutting-edge web design services. At SirBconnect, we blend creativity with technology to craft visually stunning and highly functional websites."
            src="/images/Router/Services/webDesign.png"
          />

          <WebServiceCard
            header="UI/UX Design"
            text="Enhance user satisfaction with SirBconnect’s UI/UX design services. We create intuitive and engaging interfaces that provide a seamless user experience, ensuring your website or app is both beautiful and functional."
            src="/images/Router/Services/UI.webp"
          />

          <WebServiceCard
            header="SEO Optimization"
            text="Boost your website’s visibility with SirBconnect’s SEO optimization services. Our experts use advanced techniques to improve your search engine rankings, drive organic traffic, and increase your online presence. Let us help you reach your target audience effectively."
            src="/images/Router/Services/SEO.png"
          />
        </div>
      </section>

      <section id="reviews">
        <div>
          <h1 className="top reviewHead"> Some Of Our Clients Reviews </h1>
        </div>
        <div id="reviewWrapper">
          <ReviewCard
            src="/images/Avatar/woman1.jpg"
            text="I had an amazing experience working with SirBconnect. Their team was professional, responsive, and incredibly talented. They took the time to understand our needs and delivered a website that exceeded our expectations. The design is sleek, and the functionality is seamless."
            name="Linda"
            role="Client"
          />
          <ReviewCard
            src="/images/Avatar/man2.jpg"
            text="Working with SirBconnect was a fantastic experience. They delivered a beautiful, functional website on time and within budget. Their expertise and creativity brought our vision to life, and we couldn’t be happier with the result. "
            name="Greg"
            role="Client"
          />

          <ReviewCard
            src="/images/Avatar/man1.jpg"
            text="SirBconnect transformed our outdated website into a modern, user-friendly platform. Their attention to detail and commitment to quality were evident throughout the project. The team was always available to answer our questions and made the entire process smooth and stress-free"
            name="Jason"
            role="Client"
          />
        </div>
      </section>
    </>
  );
};

export default Job;
