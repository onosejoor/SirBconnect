import AboutText from "../../snippets/AboutText";
import HeaderCard from "../../snippets/HeaderCard";
import ScholarshipServiceCard from "../../snippets/ScholarshicServiceCard";

function SchorlarshipSection() {
  return (
    <>
      <section id="scholarshipHeader">
        <HeaderCard
          text="Unlocking
              Scholarship Opportunities Tailored To Your Needs."
          src={null}
          top="Connecting Students to Opportunities"
        />
      </section>

      <section id="scholarshipAbout">
        <h1 className="graphicAboutHeader">
          <span className="comName"> SirBconnect:</span> Your Scholarship
          Navigator
        </h1>

        <div className="design-container scholarshipAbout">
          <AboutText
            class="scholarshipAboutImg"
            src="/images/Router/scholarship.png"
            text="we are dedicated to empowering students by connecting them with the best scholarship opportunities available. Our mission is to simplify the scholarship search process, making it easier for students to find and apply for financial aid that aligns with their academic goals and personal aspirations."
          />
        </div>
      </section>

      <section id="scholarshipServices">
        <h2 className="top">Services We Render</h2>

        <div className="service-container">

        <ScholarshipServiceCard
            // src="/images/Router/Services/SEO.png"
            text="Understanding financial aid options can be complex. SirBconnect offers personalized financial aid counseling to help you navigate this landscape. Our counselors will work with you to identify all available financial aid opportunities, including scholarships, grants, and loans."
            header="Financial Aid Counseling"
          />

          <ScholarshipServiceCard
            // src="/images/Router/Services/SEO.png"
            text="Navigating the scholarship application process can be daunting, but SirBconnect is here to help. Our team provides comprehensive guidance on every step of the application process. From understanding eligibility criteria to submitting your application, we offer personalized support to ensure you present the best possible application."
            header="Scholarship Application Assistance"
          />

          <ScholarshipServiceCard
            // src="/images/Router/Services/SEO.png"
            text=" Finding the right scholarships can be overwhelming. SirBconnect provides access to advanced scholarship search tools that match you with opportunities based on your profile, interests, and academic achievements. Our database includes a wide range of scholarships from various organizations, making it easier for you to find and apply for the ones that best fit your needs."
            header="Scholarship Search Tools"
          />
        </div>
      </section>
    </>
  );
}

export default SchorlarshipSection;
