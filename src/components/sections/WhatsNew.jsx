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
        <p  className="whatsNewHeaderText top">Find out the latest updates and innovations on SirBconnect</p>          
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
              //  <Link target="_blank" to="https://www.example.com"> WAEC </Link>
            }
            src="/images/Router/whatsNew/Waec.png"
          />
          <WhatsNewCard
            header="GCE registration"
            text={
              "Register for the 2024 WAEC exams by September 1, 2024. Visit the WAEC website for details."
            }
          />
          <WhatsNewCard
            header="NECO registration"
            text={
              "Register for the 2024 WAEC exams by September 1, 2024. Visit the WAEC website for details."
            }
          />
        </div>
      </section>
    </>
  );
};

export default WhatsNew;
