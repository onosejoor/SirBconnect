import ContactCard from "../snippets/ContactCard";

function Contact() {
  return (
    <>
      <section id="contact" >
        <h1 className="contactHead">
          GET IN TOUCH {" "}
          <span>
            <img src="/images/icons/pointDown.svg" alt="finger pointing down" />
          </span>
        </h1>
        <div className="touch">
          <img src="/images/customer.png" alt="customer support"/>
        <div className="contact-container">
          <ContactCard
            link="mailto: example@gmail.com"
            text="✉️ Send An Email"
          />
          <ContactCard link="tel: +2341234567890" text="📞 Call Us" />
          <ContactCard
            link="https://wa.me/+1234567890"
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
