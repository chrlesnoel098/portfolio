import React from 'react';
import './Contact.scss';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, r) => {
      alert(`Merci pour votre message à l'adresse email : ${data.email}`);
      const templateId = 'template_fpglgur';
      const serviceID = 'service_z2wh6nt';
      sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
      r.target.reset();
  }

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('E-mail envoyé avec succès!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

    return (
      <div className="section-contact">
        <h1>Contactez-moi</h1>
         <div className="ContactForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="Nom"
                    name="name" 
                    ref={
                        register({ 
                            required: "Please enter your name", 
                            maxLength: {
                                value: 20,
                                message: "Veuillez saisir un nom de moins de 20 caractères"
                            } 
                        })
                    } 
                /><br />
                {errors.name && errors.name.message}<br />

                <input
                    placeholder="email"
                    name="email"
                    ref={
                        register({
                            required: "Veuillez saisir un e-mail",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })
                    }
                /><br/>
                {errors.email && errors.email.message}<br />

                <textarea 
                    placeholder="Message"
                    name="comment" 
                    ref={
                        register({
                            required: true
                        })
                    } 
                /><br />
                {errors.comment && "oups, vous avez oublié votre message!"}<br />

                <input type="submit" value="Envoyer"/>
            </form>
        </div>
      </div>
       
    );
}

export default Contact;