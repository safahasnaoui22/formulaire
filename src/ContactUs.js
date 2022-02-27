import React from 'react'
import  emailjs from 'emailjs-com'
function ContactUs() {
    function sendEmail (e){
        e.preventDefault();
        emailjs.send('gmail', 'template_aslroqb', e.target , 'user_NmxgRLkP0IXBhLrEt6G9q')
        .then((result) =>{
           console.log(result.text);
        }, (error) => {
           console.log( error.text);
        });
e.target.reset()
    }
  return (
    <div>
<div className='container'>

<form onSubmit={sendEmail} className = "contact-form">
        
        <h2 > Contactez - nous </h2> 
        <div className = "form-content">
        
        <input typenpm start = "text"
        id = "name"
        name = "name"
        onChange = {
            (e) => setName(e.target.value)
        }
        placeholder = "nom *"
        value = { name }
        autoComplete = "off" />
       
        
        <input type = "text"
        id = "company"
        name = "company"
        onChange = {
            (e) => setCompany(e.target.value)
        }
        placeholder = "société"
        value = { company } />
       
        <input type = "text"
        id = "phone"
        name = "phone"
        onChange = {
            (e) => setPhone(e.target.value)
        }
        placeholder = "téléphone"
        value = { phone } />
       
       < div className = "email-content" >
       
        <label id = "not-mail" > Email non valide </label> 
        <input type = "mail"
        id = "email"
        name = "email"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        placeholder = "email *"
        value = { email }
        autoComplete = "off"/>
        
        
        </div> 
        <textarea id = "message"
        name = "message"
        onChange = {
            (e) => setMessage(e.target.value)
        }
        placeholder = "message *"
        value = { message }/> 
        
        </div> 
        <input className = "button"
        type = "button"
        value = "Envoyer"
        onClick = { handleSubmit }/>
         
        <div className = "form-message"> </div> 
        </form >



</div>



    </div>
  )
}

export default ContactUs