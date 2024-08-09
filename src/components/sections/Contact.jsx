import ContactCard from "../snippets/ContactCard";

function Contact() {
  return (
    <>
      <section id="contact">
        <h1 className="contactHead">
          GET IN TOUCH {" "}
          <span>
            <img src="/images/icons/pointDown.svg" alt="finger pointing down" />
          </span>
        </h1>
        <div className="touch">
          <img src="/images/customer.png" alt="customer support" />
          <div className="contact-container">
            <ContactCard
              link="mailto: sirbconnect@gmail.com"
              text="✉️ sirbconnect@gmail.com"
            />
            <ContactCard link="tel: " text="📱  +234-806-647-4524" />
            <ContactCard
              link="https://wa.me/+2348066474524"
              img={<img src="/images/icons/icons8-whatsapp.svg" />}
              text="Whatsapp Us"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
