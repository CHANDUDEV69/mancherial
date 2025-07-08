import "./ContactForm.css"
import phone from "../assets/icons/telephone.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import envelope from "../assets/icons/envelope.svg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const ContactForm = () => {
     const [formData, setFormData] = useState({username: "", usermail: "", message: ""});
     const [responseStatus, setResponseStatus] = useState(false);
     useEffect(()=>{
          
     })
     function inputChangeHandler(e){
          setFormData((prev)=>{
               return {...prev, [e.target.name]: e.target.value}
          })
     }
     async function formSubmitionHandler(e){
          e.preventDefault();
         try {
  const result = await fetch("https://mancherial-production.up.railway.app/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  if (result.ok) {
    setResponseStatus(true);
    setFormData({ username: "", usermail: "", message: "" });
  } else {
    const errorData = await result.json();
    alert("❌ Failed: " + (errorData?.error || "Unknown error"));
  }
} catch (err) {
  console.error("❌ Fetch failed:", err);
  alert("❌ Network error. Check your server or CORS.");
}


     }
return <form className="ContactUs section-padding" id="ContactUs" method="post" onSubmit={formSubmitionHandler}>
          <h2 className="text-white">Contact Us</h2>
          {!responseStatus && <div className="gridRow">
               <div className="gridCol colOne">
                    <div className="contactForm">
                    <h3 className="text-white">Let’s Start Your Dream Home Today</h3>
                    <p className="text-white">
                         Ready to design your dream home or office? We’re just a call away.
                    </p>
                    <div className="formLayout">
                         <div className="form-control">
                              <input type="text" name="username" id="username" placeholder="Your Name" value={formData.username} onChange={inputChangeHandler} required/>
                         </div>
                         <div className="form-control">
                              <input type="email" name="usermail" id="usermail" placeholder="Your Email" value={formData.usermail} onChange={inputChangeHandler} required/>
                         </div>
                         <div className="form-control full">
                              <input type="text" name="message" id="message" placeholder="message" value={formData.message} onChange={inputChangeHandler} required/>
                         </div>
                    </div>
                             <div className="form-control btn-control">
                              <input type="submit" value="submit"/>
                         </div>
                         </div>
                    </div>
               <div className="gridCol colTwo">
                    <div className="getInTouchForm">
                    <div className="getInTouchTitle">
                         <h3>Get In Touch</h3>
                    </div>
                    <div className="address">

                         <div className="adField">
                              <div><img src={phone} alt="" width="21px"/> <span className="font-semiBold">Phone:</span></div>
                              <div>+91 79895 83538 <br />
                              +91 9985599039</div>
                         </div>

                         <div className="adField">
                              <div><img src={whatsapp} alt="" width="21px"/><span className="font-semiBold">
                                   Whatsapp: 
                                   </span></div>
                                    <div>+91 79895 83538 <br />
                              +91 9985599039</div>
                         </div>

                         <div className="adField">
                              <div><img src={envelope} alt="" width="21px"/><span className="font-semiBold">
                                   Email: 
                                   </span></div>
                              <div>interiors@mancherial.com</div>
                         </div>

                         <div className="adField">
                              <div>
                                   <span className="font-semiBold">
                                   Location: 
                                   </span></div>
                              <div>Near XYZ Landmark, <br />
                                   Mancherial, Telangana</div>
                         </div>


                    </div>
                    </div>
               </div>
          </div>}
          {responseStatus && <div className="thankYouMessage">
               <h3>
                    Thank You
               </h3>
               <p>
                    Your message has been received. We'll get back to you soon.
               </p>
          </div>}

     </form>
}
export default ContactForm;