
import { useState } from "react";
import emailjs from '@emailjs/browser'


function Contact() {
    const [formData, setformData] = useState({name:"",
        email:"",
        message:""}
    );
    const [isLoading, setIsLoading] = useState(false);
    const handleChange=(e)=>{
        setformData({...formData,[e.target.name]: e.target.value});
    }
    //prevent when page refresh  after submit
    const handleSubmit= async (e)=>{
      e.preventDefault()
      setIsLoading(true);
      try {
        console.log("submited",formData);
        await emailjs.send("service_zglhsxa","template_wt89ras",{
        from_name:formData.name,
        to_name:"sarath",
        from_email:formData.email,
        to_email:"sarathgoc@gmail.com",
        message:formData.message,
       },"t6kMQi9IYIZCPdpMQ");

       setIsLoading(false);
       alert("success");
       setformData({name:"",email:"",message:""})

      } catch (error) {
        setIsLoading(false);
        console.log(error);
        alert("failed to send");
        
      }
       
       
    }
//service_zglhsxa
//template_wt89ras    template id
  return (
  <section className='relative flex items-center c-space section-spacing'>
    <div className='flex flex-col items-center justify-center max-w-md p-5
    mx-auto border border-white/10 bg-indigo rounded-2xl'>
    <div className='flex flex-col items-start gap-5 w-full mb-10 '>
        <h2 className='text-heading'>Hire me</h2>
        <p className='font-normal text-neutral-400'>Whether you looking to passionate developer 
            who build attrctive webpages and mobileapps</p>
    </div>
    <form className="w-full" onSubmit={handleSubmit}>
    <div className="mb-5">
        <label htmlFor="name" className="field-label">Full Name</label>
        <input 
        name="name"
        id="name"
        className="field-input field-input-focus"
        value={formData.name}
        type="text"
        placeholder="John"
        required
        autoComplete="name"
        onChange={handleChange}
           />
    </div>
    <div className="mb-5">
        <label htmlFor="email" className="field-label">Email</label>
        <input 
        name="email"
        id="email"
        className="field-input field-input-focus"
        value={formData.email}
        type="email"
        placeholder="john@mail.com"
        required
        autoComplete="email"
        onChange={handleChange}
           />
    </div>
    <div className="mb-5">
        <label htmlFor="message" className="field-label">Message</label>
        <textarea 
        name="message"
        id="message"
        className="field-input field-input-focus"
        value={formData.message}
        type="text"
        rows="4"
        placeholder="Share your thoughts..."
        required
        autoComplete="message"
        onChange={handleChange}
           />
    </div>
    <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md
    cursor-pointer bg-radial from-lavender to-royal hover-animation"
    >{!isLoading?"send":"sending..."}</button>
    </form>
    </div>
    
    </section>
  );
};

export default Contact;
