import "./ContactForm.css"
import phone from "../assets/icons/telephone.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import envelope from "../assets/icons/envelope.svg";
import { useEffect } from 'react'
import axios from "axios";
const ContactForm = () => {
return <form className="ContactUs section-padding" id="ContactUs" method="post" action="https://mancherial-production.up.railway.app/contact">
          <h2 className="text-white">Contact Us</h2>
          <div className="gridRow">
               <div className="gridCol colOne">
                    <div className="contactForm">
                    <h3 className="text-white">Let’s Start Your Dream Home Today</h3>
                    <p className="text-white">
                         Ready to design your dream home or office? We’re just a call away.
                    </p>
                    <div className="formLayout">
                         <div className="form-control">
                              <input type="text" name="username" id="username" placeholder="Your Name" required/>
                         </div>
                         <div className="form-control">
                              <input type="email" name="usermail" id="usermail" placeholder="Your Email" required/>
                         </div>
                         <div className="form-control full">
                              <input type="text" name="message" id="message" placeholder="message" required/>
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
                              <div>+91 9876543210</div>
                         </div>

                         <div className="adField">
                              <div><img src={whatsapp} alt="" width="21px"/><span className="font-semiBold">
                                   Whatsapp: 
                                   </span></div>
                              <div>+91 9876543210</div>
                         </div>

                         <div className="adField">
                              <div><img src={envelope} alt="" width="21px"/><span className="font-semiBold">
                                   Email: 
                                   </span></div>
                              <div>interiors@mancherial.com</div>
                         </div>

                         <div className="adField">
                              <div>
                                   {/* <img src={envelope} alt="" width="21px"/> */}
                                   <span className="font-semiBold">
                                   Location: 
                                   </span></div>
                              <div>Near XYZ Landmark, <br />
                                   Mancherial, Telangana</div>
                         </div>


                    </div>
                    </div>
               </div>
          </div>

     </form>
}
export default ContactForm;