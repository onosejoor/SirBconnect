import HeaderCard from "../../snippets/HeaderCard";
import ProjectCard from "../../snippets/ProjectCard";
import Carousel from "./Carousel";

const GraphicDesign = () => {
  return (
    <>
      <section id="graphic-design">
        <HeaderCard
          text="Pioneering
              Creativity in Graphic Design"
          motto="Where Imagination Meets Innovation"
          src="/images/Router/designHead.png"
        />
        </section>

      {/* About Section */}

      <section id="graphic-about">
        <div className="graphAbout">
          <h1 className="graphicAboutHeader">
            Unleashing Creativity:{" "}
            <span className="comName">SirBconnect’s</span> Design Excellence
          </h1>

          <p className="graphicAboutText">
            SirBconnect is renowned for its ability to transform ideas into
            visually compelling designs. Their portfolio includes a wide range
            of projects, from logo design and branding to marketing materials
            and digital graphics.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="graphicSkills">
        <h1 className="top">Our Services</h1>
        <Carousel />
        <div className="gSkills"></div>
      </section>

      {/* Projects */}
      <section id="graphicRecentProjects">
        <h1 className="recentHeader top">
          <span className="headerSpan">Recent Projects</span>
        </h1>

        <div id="projects">
          <ProjectCard
            header="Romantic Invitations"
            text="Understanding the unique needs of each client, SirBconnect tailors its services to ensure that every design project aligns perfectly with the"
          />
          <ProjectCard
            header="Romantic Invitations"
            text="Understanding the unique needs of each client, SirBconnect tailors its services to ensure that every design project aligns perfectly with the"
          />
          <ProjectCard
            header="Romantic Invitations"
            text="Understanding the unique needs of each client, SirBconnect tailors its services to ensure that every design project aligns perfectly with the"
          />
          <ProjectCard
            header="Romantic Invitations"
            text="Understanding the unique needs of each client, SirBconnect tailors its services to ensure that every design project aligns perfectly with the"
          />
        </div>
      </section>
    </>
  );
};

export default GraphicDesign;
