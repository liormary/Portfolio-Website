import React, { useRef, useState } from 'react';
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { PiWhatsappLogoBold } from "react-icons/pi";
import emailjs from "emailjs-com";
import { FaCheck } from "react-icons/fa";


const Contact = () => {
  const [messageSent, setMessageSent] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vd9ivls', 'template_ws3jyme', form.current, '8OSUfnapV5ZF7IgvE')
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Liorms3@gmail.com</h5>
            <a href='mailto:liorms3@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Lior Mary</h5>
            <a href='https://m.me/lior.mary' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <PiWhatsappLogoBold className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+972544886783</h5>
            <a href='https://wa.me/972544886783' target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input className='contact__input' type='text' name='name' placeholder='Your Full Name' required />
          <input className='contact__input' type='email' name='email' placeholder='Your Email' required />
          <textarea className='contact__textarea' name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
          {messageSent && <div className='tnx'><FaCheck className='tnx__icon' /> Thank you! Your message has been sent successfully.</div>}
        </form>
      </div>
    </section>
  )
}

export default Contact
