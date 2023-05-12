import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './Contact.css';

// Rest of the code remains the same


const Contact = () => {
  const form = useRef();
  const [showPrivacyDisclaimer, setShowPrivacyDisclaimer] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_amluary",
      "template_ki6eyeb",
      form.current,
      "jmLE7HgKtu-OmiM-x"
    ).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        console.log("message sent baby");
        toast.success("Thanks for your message! I'll reply as soon as possible.", {
          position: toast.POSITION.TOP_RIGHT
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  const togglePrivacyDisclaimer = () => {
    setShowPrivacyDisclaimer(!showPrivacyDisclaimer);
  };

  return (
    <>
      <section className="contact-container-form">
        <h4>Let's build something together</h4>
        <h1 className="contact-me">Contact Me</h1>
        <StyledContactForm>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <div className="contact-button-container">
              <input className="button-send-contact" type="submit" value="Send" />
            </div>
          </form>
      
          <span className={`privacy-disclaimer-toggle ${showPrivacyDisclaimer ? 'active' : ''}`} onClick={togglePrivacyDisclaimer}>
            Privacy Disclaimer
          </span>
          <p className={`privacy-disclaimer ${showPrivacyDisclaimer ? 'show' : ''}`}>
            We respect your privacy and are committed to protecting your personal information. When you submit a message through this contact form, we will only use your information to respond to your inquiry. We do not store or retain your email address or any other personal data you provide. Once your message has been processed and responded to, your information will be deleted. Please note that while we take all necessary precautions to secure your data, the transmission of information over the internet is not completely secure. Therefore, we cannot guarantee the absolute security of your data during transmission. By submitting this form, you acknowledge and accept the privacy practices outlined in this disclaimer.
          </p>
        </StyledContactForm>
      </section>

      <ToastContainer position="top-right" autoClose={5000} className="Toast-Container" style={{ zIndex: 9999999999 }} />
    </>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    font-family: 'Orbitron', sans-serif;
    color: black;
    margin-top: 3rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(47, 255, 217, 0.84);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(47, 255, 217, 0.84);
      }
    }
    label {
      margin-top: 1rem;
      color: white;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background-color: rgba(47, 255, 217, 0.84);
      color: black;
      border: none;
      font-family: 'Orbitron', sans-serif;
    }
  }
};
.privacy-disclaimer-toggle {
  cursor: pointer;
  color: white;
  margin-top: 1rem;
  text-decoration: underline;
}

.privacy-disclaimer {
  margin-top: 1rem;
  color: white;
  display: none;
}

.privacy-disclaimer-toggle.active + .privacy-disclaimer {
  display: block;
`