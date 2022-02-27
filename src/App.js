import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
export const App = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d3aokzp', 'template_aslroqb', form
        .current, 'user_NmxgRLkP0IXBhLrEt6G9q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <h2 >Get in touche </h2> 
            <label>Name</label>
            <input type="text" name="name"
                id='name' />
            <label>Company</label>
            <input type="text" name="company" id="company" />
            <label>phone</label>
            <input type="number" name="phone"
                id="phone" />
            <label>Email</label>
            <input type="email" name="email" id='email' />
            <label>Message</label>
            <textarea name="message" />
            <input className='button' type="button" value="Send" id="message" />
        </form>
    );
};
export default App;