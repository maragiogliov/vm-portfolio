import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import './Contact.css';

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_amluary",
        "template_ki6eyeb",
        form.current,
        "jmLE7HgKtu-OmiM-x"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("message sent baby");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
  
    <section className="contact-container-form">
      <h1>Contact Me</h1>
      <StyledContactForm>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="button-send-contact" type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </section>
    <section className="contact-container-buttons">
      <div className="contact-button"> <h1>GITHUB</h1></div>
      <div className="contact-button"> <h1>LINKEDIN</h1></div>
      <div className="contact-button"> <h1>BEHANCE</h1></div>
    </section>
    </>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    font-family: 'Elsie', cursive;

    margin-top:3rem;
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
        border: 2px solid rgba(0, 206, 158, 1);
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
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background-color: rgba(23, 80, 40, 0.88);
      color: white;
      border: none;
    }
  }
`;