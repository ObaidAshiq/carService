"use client"
import React, { useRef, useState } from 'react'
import styles from "../../contact/contact.module.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
const contactFormRef = useRef(null);
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)
 
async function handleSubmit() {
    // there is no directive here
    setIsLoading(true)
    emailjs.sendForm('service_70dll3w','template_eoaup74',contactFormRef.current!,'adItjSqyFuU7s8wHq')
    // emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!.toString(), process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!.toString(), contactFormRef.current!, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!.toString())
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        setError(error.text)
        console.log(error);
    });
    setIsLoading(false)
}

  return (
    <form action={handleSubmit} ref={contactFormRef} className={`${styles.form} `}>
          <input className=' w-full focus:outline dark:focus:outline-white' type="text" placeholder="Name and Surname" name="username" required/>
          <input className=' w-full focus:outline dark:focus:outline-white' type="email" placeholder="Email Address" name="email" required />
          <input className=' w-full focus:outline dark:focus:outline-white' type="tel" placeholder="Phone Number" name="phoneNumber" required/>
          <textarea className=' w-full focus:outline dark:focus:outline-white' 
            name="message"
            id=""
            cols={30}
            rows={5}
            placeholder="Message"
            required
          ></textarea>
          {error && <p className='text-xs text-red-500'>{error}</p>}
          <button disabled={isLoading} className='disabled:bg-slate-500 disabled:cursor-not-allowed disabled:animate-pulse'>{isLoading?'Sending...': 'Send'}</button>
        </form>
  )
}
export default ContactForm