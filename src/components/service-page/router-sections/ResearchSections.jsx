import HeaderCard from "../../snippets/HeaderCard";
import WebServiceCard from "../../snippets/WebServiceCard";

const ResearchSections = () => {
  return (
    <>
      <section id="researchHeader">
        {" "}
        <HeaderCard
          src="/images/Router/research/researchHeader.png"
          text="Researching Today for a Brighter Tomorrow"
          top="Researching Today for a Brighter Tomorrow"
          class2="headerImage"
        />
      </section>

      <section id="researchAbout">
        <h2 className="researchAboutHeader">Advancing Research at SirBconnect</h2>
        <p className="researchAboutText">
          {" "}
          we are dedicated to pioneering innovative research that drives
          progress and transforms ideas into reality. Our mission is to empower
          knowledge and inspire breakthroughs across various fields of study.
        </p>
      </section>

      <section id="researchService">
        <h3 className="top margin point"> Research </h3>
        <div className="researchServiceContainer">
          <WebServiceCard
            text={
              "Sirbconnect offers comprehensive support for PhD students. From literature reviews to data analysis, they’re your research partner. Whether you’re navigating ethical considerations or developing a compelling proposal, Sirbconnect has your back."
            }
            header={"PHD Research"}
            classname={"researchServiceCard"}
            src={"/images/Router/research/researchHeader.png"}
          />
          <WebServiceCard
            text={
              "If you’re pursuing your Master’s (MSc), Sirbconnect assists with focused literature reviews, research proposal formulation, and effective data collection strategies. They’ll guide you through the MSc research process."
            }
            header={"MSC Research"}
            src={"/images/Router/research/researchHeader.png"}
            classname={"researchServiceCard"}
          />
          <WebServiceCard
            text={
              "If you’re an undergraduate student (BSc), Sirbconnect provides guidance on research basics, literature search skills, and project structuring. We’re your research ally from day one!"
            }
            header={"BSc Research"}
            src={"/images/Router/research/researchHeader.png"}
            classname={"researchServiceCard"}
          />
        </div>
        <h3 className="top margin">Biomedical Researches</h3>
        <div className="researchServiceContainer">
          <WebServiceCard
            header={"Human Study"}
            text={
              "The SirBconnect Human Study is an intriguing endeavor that involves multiple research steps and aims to advance our understanding of various aspects of human health, behavior, or other relevant topics. "
            }
            classname={"researchServiceCard"}
            src={"/images/Router/research/human.png"}
          />
          <WebServiceCard
            header={"Animal Study"}
            text={
              "At SirBconnect, our dedicated researchers prioritize rigorous and transparent animal research, seamlessly connecting insights gained from lab experiments to the critical realm of clinical trials. By bridging this gap, we unravel the mysteries of disease pathways, evaluate potential therapies, and ultimately contribute to improved human health."
            }
            src={"/images/Router/research/animal.png"}
          />
        </div>

        <h3 className="top margin point"> Data Analysis </h3>

        <div className="researchServiceContainer">
          <WebServiceCard
            header={"Data Collection"}
            text={
              "SirBconnect excels in meticulous data collection. Whether it’s patient records, sensor data, or survey responses, our researchers ensure accuracy and completeness. Think of us as the diligent librarians cataloging information for future discoveries."
            }
            src={"/images/Router/research/collection.png"}
            classname={"researchServiceCard"}
          />
          <WebServiceCard
            header={"Data Analysis"}
            text={
              "At SirBconnect, data analysis isn’t just about crunching numbers; it’s about revealing truths. Our analysts wield statistical tools like artists—creating visualizations, spotting outliers, and balancing risks. "
            }
            src={"/images/Router/research/researchAbout.png"}
            classname={"researchServiceCard"}
          />
          <WebServiceCard
            header={"Data Interpretation"}
            text={
              "SirBconnect’s data interpreters are the alchemists of numbers. They unravel patterns, decode trends, and turn raw data into meaningful insights. Imagine them as the storytellers, narrating the saga hidden within the data canvas. "
            }
            src={"/images/Router/research/interpretation.png"}
            classname={"researchServiceCard"}
          />
        </div>
      </section>
    </>
  );
};

export default ResearchSections;
