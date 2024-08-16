import { useState } from "react";

import ContactCard from "../snippets/ContactCard";
import FormInput from "../snippets/Inputs";

function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function setUserDetails(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setError({
      ...error,
      [name]: "",
    });
  }

  function validateEmail(email) {
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  function submit(e) {
    const keys = Object.keys(inputs);
    const newError = {};

    keys.forEach((key) => {
      if (inputs[key].trim() === "") {
        e.preventDefault();
        newError[key] = `${key}  Required`;
        setError(newError);
      }
    });

    if (inputs.email) {
      const emailValidate = validateEmail(inputs.email);

      if (!emailValidate) {
        console.log("email. is not validated");

        setError((prev) => {
          return {
            ...prev,
            email: "Invalid Email",
          };
        });
        console.log(error, error.email);
      }
    }
  }
  return (
    <>
      <div className="success">You Email Has Beesn Sent!</div>
      <section id="contact">
        <h1 className="top formH1"> Contact Us </h1>
        <div className="touchWrap">
          <div className="contact-wrap">
            <h1 className="contactHead">
              Let&apos;s Research On Something{" "}
              <span className="comName"> Cool</span> Together{" "}
            </h1>
            <div className="contact-container">
              <ContactCard
                link="mailto: sirbconnect@gmail.com"
                text="✉️ sirbconnect@gmail.com"
              />
              <ContactCard
                link="tel: +2347056017060"
                text="📱  +234-705-601-7060"
              />
              <ContactCard
                link="https://wa.me/+2347056017060"
                img={<img src="/images/icons/icons8-whatsapp.svg" />}
                text="Whatsapp Us"
              />
            </div>
          </div>
          {/* <img src="/images/customer.png" alt="customer support" /> */}

          <div className="touch">
            <form
              className="contactForm"
              // action="https://formspree.io/f/xeojkwyo"
              // method="POST"
            >
              <FormInput
                name="name"
                change={setUserDetails}
                value={inputs.name}
                error={error.name}
                placeholder="Enter Your Name"
                errorMessage="What Should I Call You?"
              />
              <FormInput
                name="email"
                change={setUserDetails}
                value={inputs.email}
                error={error.email}
                placeholder="Enter Your Email"
                errorMessage={error.email}
              />
              <FormInput
                name="subject"
                change={setUserDetails}
                value={inputs.subject}
                error={error.subject}
                placeholder="Enter Your Subject"
                errorMessage={error.subject}
              />
              <div>
                {" "}
                <label htmlFor="message">Message</label>
                <textarea style={{borderColor: error.message? "red" : "inherit"}}
                  id="message"
                  className="contactTextArea"
                  name="message"
                  rows="8"
                  placeholder="Leave a message..."
                  onChange={setUserDetails}
                  value={inputs.message}
                />
                {error.message && (
                  <h6 className="error message">Please Leave A Message....</h6>
                )}
              </div>

              <button className="contact" type="submit" onClick={submit}>
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
