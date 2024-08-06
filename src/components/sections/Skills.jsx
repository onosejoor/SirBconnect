// import { useState } from "react";
import SkillDiv from "./SkillDiv";

function Skills() {
  // const [count, setCount] = useState(false);
  // const target = 200;

  // window.addEventListener("scroll", () => {
  //   const countElement = document.querySelector(".count");
  //   const elementTop = countElement.getBoundingClientRect().top;

  //   if (elementTop <= window.innerHeight && !count) {
  //     setCount((prev) => {
  //       let interval = setInterval(
  //         () => {

  //           if (prev !== target) {
  //             return prev + 1;
  //           } else {
  //             clearInterval(interval);
  //             return prev;
  //           }
  //         },

  //         1
  //       );
  //     });
  //   } else{
  //     return null;
  //   }
  // });

  return (
    <section id="services">
      <h1 className="about">Services</h1>
      <div className="arrow"></div>
      <div id="skill">
        <SkillDiv
          src="/images/skills/internet.jpg"
          text="Internet Services and Research"
          url="internet-services"
        />
        <SkillDiv
          url="job-application"
          src="/images/skills/research3.jpg"
          text="Job Applications                                               "
        />
        <SkillDiv src="/images/skills/scholarships.jpg" text="Scholarships" />
        <SkillDiv
          src="/images/skills/graphicDesign.jpg"
          text="Graphic designs and Trainings"
          url="graphic-design"
        />
        <SkillDiv
          src="/images/skills/research2.jpg"
          text="School Assignments and Projects"
          url="school-ca"
        />
        <SkillDiv
          src="/images/skills/consultant.jpg"
          text="Business Consultation"
          url="consultation"
        />
      </div>
    </section>
  );
}

export default Skills;
