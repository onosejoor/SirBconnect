// import { Link } from "react-router-dom";
import WhatsNewCard from "../snippets/WhatsNewCard";

const WhatsNew = () => {
  return (
    <>
      <section id="whatsNew">
        <div className="whatsNewDivContainer">
          <h2 className="whatsNewH1">
            <span>
              <img
                src="/images/Router/whatsNew/new.png"
                alt="what's new icon PNG"
              />
            </span>{" "}
            What&apos;s New
          </h2>
          <p className="whatsNewHeaderText">
            Find out the latest updates and innovations on SirBconnect
          </p>
        </div>

        <div className="whatsNewCardWrapper">
          <WhatsNewCard
            header="Waec registration"
            text={
              <>
                {" "}
                Register for the 2024 WAEC exams by September 1, 2024. Visit the{" "}
                WAEC website for details.
              </>
            }
            text2={
              "The West African Examinations Council (WAEC) conducts the West African Senior School Certificate Examination (WASSCE) for both school and private candidates. For the 2024 WASSCE for Private Candidates (Second Series), normal registration is ongoing. Candidates must complete their biometrics capturing and online registration by 11:59 PM on Sunday, September 1, 20241. You can register online via the WAECKONNECT app or the WAEC website"
            }
            category={"WAEC"}
            src="/images/Router/whatsNew/Waec.png"
          />
          <WhatsNewCard
            header="GCE registration"
            text={
              "Register for the 2024 WAEC exams by September 1, 2024. Visit the WAEC website for details."
            }
            text2={
              "The West African Examinations Council (WAEC) conducts the West African Senior School Certificate Examination (WASSCE) for both school and private candidates. For the 2024 WASSCE for Private Candidates (Second Series), normal registration is ongoing. Candidates must complete their biometrics capturing and online registration by 11:59 PM on Sunday, September 1, 20241. You can register online via the WAECKONNECT app or the WAEC website"
            }
            category={"Gce"}
          />
          <WhatsNewCard
            header="NECO registration"
            text={
              "Register for the 2024 WAEC exams by September 1, 2024. Visit the WAEC website for details."
            }
            text2={
              "The National Examinations Council (NECO) has commenced registration for the 2024 Senior School Certificate Examination (SSCE) for internal candidates. Schools must register their candidates using the offline application before logging online to the NECO registration portal to complete payment and upload candidates’ data2. The registration process includes filling in personal details, selecting examination types, and paying the necessary fees3."
            }
            category={"Neco"}
          />
        </div>
      </section>
    </>
  );
};

export default WhatsNew;
