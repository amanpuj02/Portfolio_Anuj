import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstragramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';
 

const Contact = () => {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
     <section id='contactPage'>
         <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the oppertunity to work with a diverse group of companies. Some of the notable companies I have worked with includes.
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Client' className='clientImg'/>
                <img src={Adobe} alt='Client' className='clientImg'/>
                <img src={Microsoft} alt='Client'  className='clientImg'/>
                <img src={Facebook} alt='Client' className='clientImg'/>
            </div>

         </div>
         <div id='contact'>
            <h1 className='contactPageTitle'>Conatact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work oppertunity.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='Face' className='link'/>
                    <img src={TwitterIcon} alt='Twit' className='link'/>
                    <img src={YouTubeIcon} alt='You' className='link'/>
                    <img src={InstragramIcon} alt='Inst' className='link'/>
                </div>
            </form>

         </div>


     </section>
  )
}

export default Contact
