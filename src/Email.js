import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import home from './photos/home.jpg';

function CreateEmail() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('TylerTestService', 'template_ci8hgta', form.current, 'IP0Nmgnbn7XBbAVks')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
        <div id="emailContainer">
        <div id="imageContainer">
            <img src={home}/>
        </div>
        <div id="formContainer">
            <form ref={form} onSubmit={sendEmail}>
                <h2>Contact Me</h2>
                <h3><em>Send an email to request a follow up session, meal plan or to leave me a review!</em></h3>
                    <input type="text" placeholder="Your Name" name="user_name" />
                    <div id="emailSubjectContainer">
                        <input type="email" placeholder="Your Email" name="user_email" />
                        <input type="text" placeholder="Subject" name="subject" />
                    </div>
                    
                    <textarea placeholder="Your Message" name="message" />
                <input id="sub"type="submit" value="Send" />
            </form>
        </div>
    </div>
    
    </>


  );
};

export default function Email() {
    return(
        <CreateEmail />
    )
}