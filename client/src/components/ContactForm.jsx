import "./ContactForm.css"
import phone from "../assets/icons/telephone.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import envelope from "../assets/icons/envelope.svg";
import Form from "./util/Form";
const ContactForm = () => {
return <div className="ContactUs section-padding" id="ContactUs">
  
          <div>
               <h2 className="text-white">Contact Us</h2>
               <div className="gridRow">
               <div className="gridCol colOne">
                    <Form />
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
          </div>
          </div>


     </div>
}
export default ContactForm;