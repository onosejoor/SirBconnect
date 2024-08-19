import SkillDiv from "./SkillDiv";

function Skills() {
  return (
    <section id="services">
      <h1 className="about">What We Offer</h1>
      <div className="arrow"></div>
      <div id="skill">
        <SkillDiv
          src="/images/skills/scholarships.jpg"
          header="Scholarships"
          url="schorlarships"
          text="At SirBconnect, we understand that finding the right school and scholarship can be challenging. Our scholarship consultation services are designed to help you navigate this process with ease. We provide expert advice and resources to help you identify schools that fit your budget and academic goals. Let us guide you in finding affordable education options and securing the best possible opportunities for your future."
        />
                <SkillDiv
          src="/images/skills/graphicDesign.jpg"
          header="Graphic designs and Trainings"
          url="graphic-design"
          text="Transform Your Brand with Stunning Designs!. Our graphic design services bring your vision to life. From logos and brochures to social media graphics and marketing materials, we create visually appealing designs that make your brand stand out."
        />
        <SkillDiv
          src="/images/skills/internet.jpg"
          header="Internet Services and Research"
          url="internet-services"
          text=" SirBconnect offers reliable internet services and comprehensive research solutions. Whether you need high-speed internet for your home or business, or in-depth research for academic or professional projects, we’ve got you covered. Our team ensures you stay connected and have access to the information you need."
        />

        <SkillDiv
          url="web-dev"
          src="/images/skills/research3.jpg"
          header=" Full-stack Web Development"
          text="Our web development team creates responsive, user-friendly websites tailored to your needs. Enhance your online presence with a professional website from SirBconnect. We specialize in creating websites that are not only visually appealing but also optimized for performance and user experience."
        />

        <SkillDiv
          src="/images/skills/research2.jpg"
          header="School Assignments and Projects"
          url={`https://wa.me/+2347030953448/?header=Lets%20Work/discuss%20On%20School-Assignment`}
          text="Ace Your Assignments with Expert Help Struggling with school assignments? Our experts are here to assist you with research, writing, and editing to ensure you excel in your studies. Whether it’s a complex project or a simple homework task, SirBconnect provides the support you need to achieve academic success."
        />
        <SkillDiv
          src="/images/skills/consultant.jpg"
          header="Business Consultation"
          url="consultation"
          text="Our business consultation services offer strategic insights and solutions to help your business thrive. From startups to established companies, we provide the guidance you need to succeed. Our experts work with you to develop effective strategies, improve operations, and achieve your business goals."
        />
      </div>
    </section>
  );
}

export default Skills;
