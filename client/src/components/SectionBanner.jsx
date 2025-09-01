import "./SectionBanner.css"
import Modal from '../components/util/Modal';
import { useState } from 'react';
import telephone from "../assets/icons/telephone.svg";
import envelope from "../assets/icons/envelope.svg";

export default function SectionBanner(){
     const [isModalOpen, setIsModalOpen] = useState(false);
     const myFun = () =>{
          setIsModalOpen(true)
     }
     return (
          <div className="Section-Banner">
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
               <div className="Locations_Banner">
                    <div className="banner_content">
                        <h1>Our Service Locations</h1>
                        <div className="banner_subtitle">
                               Premium Interior Design Services Across Telangana
                          </div>
                         <p className="banner_paragraph">
                             From Ramagundam to surrounding cities, we bring elegance and innovation to your spaces with our expert interior design solutions.
                         </p>
                         <div className="actionController">
                              <a href="tel: +91 79895 83538" className="call">
                                   <span><img src={telephone} alt="Call" width="18px"/></span>
                                   79895 83538
                              </a>
                              <a href="mailto:interiors@mancherial.com">
                                   <span><img src={envelope} alt="Mail" width="18px"/></span>
                                   Get Free Consultation
                              </a>
                         </div>
                        {/* <div className="theme-btn-primary ctaButton" onClick={()=>{myFun()}}>Book A Consulation</div> */}
                    </div>
</div>
          </div>)
}