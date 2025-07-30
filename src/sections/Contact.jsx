
import { useState } from "react";
import emailjs from '@emailjs/browser'
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";


function Contact() {
    const [formData, setformData] = useState({name:"",
        email:"",
        message:""}
    );
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setshowAlert] = useState(false);
    const [alertType, setalertType] = useState("success");
    const [alertMessage, setalertMessage] = useState("");
    const handleChange=(e)=>{
        setformData({...formData,[e.target.name]: e.target.value});
    }
    const showAlertMessage=(type,message)=>{
        setalertType(type)
        setalertMessage(message)
        setshowAlert(true)
        setTimeout(()=>{
          setshowAlert(false);
        },5000)
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
       setformData({name:"",email:"",message:""})
       showAlertMessage("success"," Your message has been sent")
       

      } catch (error) {
        setIsLoading(false);
        console.log(error);
        showAlertMessage('danger'," something went wrong")
        
      }
       
       
    }
//service_zglhsxa
//template_wt89ras    template id
  return (
  <section className='relative flex items-center c-space section-spacing'>
    <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    {showAlert && <Alert type={alertType} text={alertMessage}/>}
    <div className='flex flex-col items-center justify-center max-w-md p-5
    mx-auto border border-white/10 bg-indigo rounded-2xl backdrop'>
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
