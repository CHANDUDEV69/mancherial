import "./Cities.css";
import { useState } from "react";
import Modal from '../components/util/Modal';
import SectionBanner from "./SectionBanner";
import phone from "../assets/icons/telephone.svg"
import phone_blue from "../assets/icons/telephone_blue.svg"
import clock from "../assets/icons/clock.svg"
import location from "../assets/icons/geo-alt_blue.svg"
import star from "../assets/icons/star_blue.svg"
export default function Cities(){
         const [isModalOpen, setIsModalOpen] = useState(false);
     return <>
     
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
          <SectionBanner />
          <div className="cities section-padding">
               <h3 className="text-center">
                    Where We <b>Serve</b>
               </h3>
               <p className="text-center my-1 text-medium">
                    Discover our service locations across Telangana. Each area receives the same level of dedication and craftsmanship that has made us the trusted choice for interior design.
                    </p>
               <div className="locations">
                    <div className="locationInfoCard">
                         <div className="locationInfoCardHeader">
                              <div className="loc_header_content">
                                   <h4>Ramagundam</h4>
                              <div className="location_area_info">
                              <span><img src={location} alt="location" /></span> Main Service Area
                              </div>
                              </div>
                              <div className="loc_header_badge">
                                   <img src={star} alt="star icon" />
                                   <span> 200+ Projects</span>
                              </div>
                         </div>
                         <p className="locationParagraph">
                              Our primary location serving Ramagundam and surrounding areas. We specialize in complete home interior solutions including modular kitchens, wardrobes, cupboards, and office interiors.
                         </p>
                         <div className="location_services">
                         <h4>
                              Our Services
                         </h4>
                         <div className="services_list">
                             <div className="service_item">Modular Kitchens</div>
                             <div className="service_item">Wardrobes</div>
                             <div className="service_item">Cupboards</div>
                             <div className="service_item">False Ceilings</div>
                             <div className="service_item">TV Units</div>
                             <div className="service_item">Office Interiors</div>
                         </div>
                         </div>
                         
                         <div className="contact_info_card">
                             <div className="contact_info">
                              <span>
                                   <img src={phone_blue} alt="call" width="16px"/>
                              </span>&nbsp;&nbsp;+91 9876543230</div>
                             <div className="contact_info">
                                   <img src={clock} alt="call" width="16px"/>
                              &nbsp;&nbsp;Mon - Sat: 9:00 AM - 7:00 PM</div>
                         </div>
                         <div className="locationActionControllers">
                              <a href="javascript:void(0)" className="actionBtn actionBtn1" onClick={(()=>{
                                   setIsModalOpen(true);
                              })}> Get Free Consultation</a>

                              <a href="tel: +91 79895 83538" className="actionBtn">
                              <span>
                              <img src={phone_blue} alt="call" width="16px" />     
                              </span> 
                              &nbsp;Call Now</a>
                         </div>
                    </div>

                    <div className="locationInfoCard">
                         <div className="locationInfoCardHeader">
                              <div className="loc_header_content">
                                   <h4>Godavarikhani</h4>
                              <div className="location_area_info">
                              <span><img src={location} alt="location" /></span> Local Expertise Zone
                              </div>
                              </div>
                              <div className="loc_header_badge">
                                   <img src={star} alt="star icon" />
                                   <span> 120+ Projects</span>
                              </div>
                         </div>
                         <p className="locationParagraph">
                              Expert interior design & custom cupboard works designed for local homes. We understand how people in Telangana towns actually live and plan every inch smartly.
                         </p>
                         <div className="location_services">
                         <h4>
                              Our Services
                         </h4>
                         <div className="services_list">
                             <div className="service_item">Custom Cupboards</div>
                             <div className="service_item">Modular Kitchens</div>
                             <div className="service_item">Wardrobes</div>
                             <div className="service_item">Storage Solutions</div>
                             <div className="service_item">Home Décor</div>
                         </div>
                         </div>
                         
                         <div className="contact_info_card">
                             <div className="contact_info">
                              <span>
                                   <img src={phone_blue} alt="call" width="16px"/>
                              </span>&nbsp;&nbsp;+91 9876543230</div>
                             <div className="contact_info">
                                   <img src={clock} alt="call" width="16px"/>
                              &nbsp;&nbsp;Mon - Sat: 9:00 AM - 6:00 PM</div>
                         </div>
                         <div className="locationActionControllers">
                              <a href="javascript:void(0)" className="actionBtn actionBtn1" onClick={(()=>{
                                   setIsModalOpen(true);
                              })}> Get Free Consultation</a>

                              <a href="tel: +91 79895 83538" className="actionBtn">
                              <span>
                              <img src={phone_blue} alt="call" width="16px" />     
                              </span> 
                              &nbsp;Call Now</a>
                         </div>
                    </div>

                    <div className="locationInfoCard">
                         <div className="locationInfoCardHeader">
                              <div className="loc_header_content">
                                   <h4>Bellampally</h4>
                              <div className="location_area_info">
                              <span><img src={location} alt="location" /></span> Modern Solutions Hub
                              </div>
                              </div>
                              <div className="loc_header_badge">
                                   <img src={star} alt="star icon" />
                                   <span> 85+ Projects</span>
                              </div>
                         </div>
                         <p className="locationParagraph">
                              Modern, stylish & affordable interior solutions for Bellampally families. We provide complete solutions from cupboards to modular kitchens with quality finishing.
                         </p>
                         <div className="location_services">
                         <h4>
                              Our Services
                         </h4>
                         <div className="services_list">
                             <div className="service_item">Custom Cupboards</div>
                             <div className="service_item">Modular Kitchens</div>
                             <div className="service_item">Wardrobes</div>
                             <div className="service_item">False Ceilings</div>
                             <div className="service_item">Furniture Works</div>
                         </div>
                         </div>
                         
                         <div className="contact_info_card">
                             <div className="contact_info">
                              <span>
                                   <img src={phone_blue} alt="call" width="16px"/>
                              </span>&nbsp;&nbsp;+91 9876543230</div>
                             <div className="contact_info">
                                   <img src={clock} alt="call" width="16px"/>
                              &nbsp;&nbsp;Mon - Sat: 10:00 AM - 6:00 PM</div>
                         </div>
                         <div className="locationActionControllers">
                              <a href="javascript:void(0)" className="actionBtn actionBtn1" onClick={(()=>{
                                   setIsModalOpen(true);
                              })}> Get Free Consultation</a>

                              <a href="tel: +91 79895 83538" className="actionBtn">
                              <span>
                              <img src={phone_blue} alt="call" width="16px" />     
                              </span> 
                              &nbsp;Call Now</a>
                         </div>
                    </div>

                    <div className="locationInfoCard">
                         <div className="locationInfoCardHeader">
                              <div className="loc_header_content">
                                   <h4>Peddapally</h4>
                              <div className="location_area_info">
                              <span><img src={location} alt="location" /></span> Custom Design Center
                              </div>
                              </div>
                              <div className="loc_header_badge">
                                   <img src={star} alt="star icon" />
                                   <span> 95+ Projects</span>
                              </div>
                         </div>
                         <p className="locationParagraph">
                              Modern, affordable & custom-made interior solutions. We make your dream home come true with expert cupboard works, modular kitchens, and complete home makeovers.
                         </p>
                         <div className="location_services">
                         <h4>
                              Our Services
                         </h4>
                         <div className="services_list">
                              <div className="service_item">Modular Kitchens</div>
                              <div className="service_item">Custom Cupboards</div>
                             <div className="service_item">Wardrobes</div>
                             <div className="service_item">False Ceilings</div>
                             <div className="service_item">Office Interiors</div>
                         </div>
                         </div>
                         
                         <div className="contact_info_card">
                             <div className="contact_info">
                              <span>
                                   <img src={phone_blue} alt="call" width="16px"/>
                              </span>&nbsp;&nbsp;+91 9876543230</div>
                             <div className="contact_info">
                                   <img src={clock} alt="call" width="16px"/>
                              &nbsp;&nbsp;Mon - Sat: 10:00 AM - 5:00 PM</div>
                         </div>
                         <div className="locationActionControllers">
                              <a href="javascript:void(0)" className="actionBtn actionBtn1" onClick={(()=>{
                                   setIsModalOpen(true);
                              })}> Get Free Consultation</a>

                              <a href="tel: +91 79895 83538" className="actionBtn">
                              <span>
                              <img src={phone_blue} alt="call" width="16px" />     
                              </span> 
                              &nbsp;Call Now</a>
                         </div>
                    </div>

                    <div className="locationInfoCard">
                         <div className="locationInfoCardHeader">
                              <div className="loc_header_content">
                                   <h4>Mandamarri</h4>
                              <div className="location_area_info">
                              <span><img src={location} alt="location" /></span> Growing Service Zone
                              </div>
                              </div>
                              <div className="loc_header_badge">
                                   <img src={star} alt="star icon" />
                                   <span> 60+ Projects</span>
                              </div>
                         </div>
                         <p className="locationParagraph">
                              Complete interior design services for Mandamarri homeowners. We provide practical, long-lasting, and budget-friendly solutions that make day-to-day life easier.
                         </p>
                         <div className="location_services">
                         <h4>
                              Our Services
                         </h4>
                         <div className="services_list">
                              <div className="service_item">Cupboard Works</div>
                              <div className="service_item">Modular Kitchens</div>
                             <div className="service_item">Custom Furniture</div>
                             <div className="service_item">TV Units</div>
                             <div className="service_item">Bedroom Interiors</div>
                         </div>
                         </div>
                         
                         <div className="contact_info_card">
                             <div className="contact_info">
                              <span>
                                   <img src={phone_blue} alt="call" width="16px"/>
                              </span>&nbsp;&nbsp;+91 9876543230</div>
                             <div className="contact_info">
                                   <img src={clock} alt="call" width="16px"/>
                              &nbsp;&nbsp;Mon - Sat: 10:00 AM - 6:00 PM</div>
                         </div>
                         <div className="locationActionControllers">
                              <a href="javascript:void(0)" className="actionBtn actionBtn1" onClick={(()=>{
                                   setIsModalOpen(true);
                              })}> Get Free Consultation</a>

                              <a href="tel: +91 79895 83538" className="actionBtn">
                              <span>
                              <img src={phone_blue} alt="call" width="16px" />     
                              </span> 
                              &nbsp;Call Now</a>
                         </div>
                    </div>

                    <div className="locationInfoCard">
                         <div className="locationInfoCardHeader">
                              <div className="loc_header_content">
                                   <h4>Mancherial</h4>
                              <div className="location_area_info">
                              <span><img src={location} alt="location" /></span> Extended Service Zone
                              </div>
                              </div>
                              <div className="loc_header_badge">
                                   <img src={star} alt="star icon" />
                                   <span> 80+ Projects</span>
                              </div>
                         </div>
                         <p className="locationParagraph">
                              Complete interior design services for Mandamarri homeowners. We provide practical, long-lasting, and budget-friendly solutions that make day-to-day life easier.

                         </p>
                         <div className="location_services">
                         <h4>
                              Our Services
                         </h4>
                         <div className="services_list">
                              <div className="service_item">Home Interiors</div>
                              <div className="service_item">Custom Cupboards</div>
                              <div className="service_item">Modular Solutions</div>
                             <div className="service_item">Consultation</div>
                         </div>
                         </div>
                         
                         <div className="contact_info_card">
                             <div className="contact_info">
                              <span>
                                   <img src={phone_blue} alt="call" width="16px"/>
                              </span>&nbsp;&nbsp;+91 9876543230</div>
                             <div className="contact_info">
                                   <img src={clock} alt="call" width="16px"/>
                              &nbsp;&nbsp;Mon - Sat: 9:00 AM - 6:00 PM</div>
                         </div>
                         <div className="locationActionControllers">
                              <a href="javascript:void(0)" className="actionBtn actionBtn1" onClick={(()=>{
                                   setIsModalOpen(true);
                              })}> Get Free Consultation</a>

                              <a href="tel: +91 79895 83538" className="actionBtn">
                              <span>
                              <img src={phone_blue} alt="call" width="16px" />     
                              </span> 
                              Call Now</a>
                         </div>
                    </div>

                    <div className="locationInfoCard">
                         <div className="locationInfoCardHeader">
                              <div className="loc_header_content">
                                   <h4>Jagtial</h4>
                              <div className="location_area_info">
                              <span><img src={location} alt="location" /></span> Growing Service Area
                              </div>
                              </div>
                              <div className="loc_header_badge">
                                   <img src={star} alt="star icon" />
                                   <span> 30+ Projects</span>
                              </div>
                         </div>
                         <p className="locationParagraph">
                              Expanding our reach to Jagtial with comprehensive interior design services. From concept to completion, we deliver excellence in every project.
                         </p>
                         <div className="location_services">
                         <h4>
                              Our Services
                         </h4>
                         <div className="services_list">
                              <div className="service_item">Complte Interiors</div>
                              <div className="service_item">Modular Kitches</div>
                              <div className="service_item">Wardrobes</div>
                             <div className="service_item">Consultation</div>
                         </div>
                         </div>
                         
                         <div className="contact_info_card">
                             <div className="contact_info">
                              <span>
                                   <img src={phone_blue} alt="call" width="16px"/>
                              </span>&nbsp;&nbsp;+91 9876543230</div>
                             <div className="contact_info">
                                   <img src={clock} alt="call" width="16px"/>
                              &nbsp;&nbsp;Mon - Sat: 10:00 AM - 5:00 PM</div>
                         </div>
                         <div className="locationActionControllers">
                              <a href="javascript:void(0)" className="actionBtn actionBtn1" onClick={(()=>{
                                   setIsModalOpen(true);
                              })}> Get Free Consultation</a>

                              <a href="tel: +91 79895 83538" className="actionBtn">
                              <span>
                              <img src={phone_blue} alt="call" width="16px" />     
                              </span> 
                              Call Now</a>
                         </div>
                    </div>


                    <div className="locationInfoCard">
                         <div className="locationInfoCardHeader">
                              <div className="loc_header_content">
                                   <h4>Karimnagar</h4>
                              <div className="location_area_info">
                              <span><img src={location} alt="location" /></span> Regional Hub
                              </div>
                              </div>
                              <div className="loc_header_badge">
                                   <img src={star} alt="star icon" />
                                   <span> 65+ Projects</span>
                              </div>
                         </div>
                         <p className="locationParagraph">
                              Serving the Karimnagar region with innovative interior solutions. Our team understands local preferences and delivers designs that blend tradition with modernity.                         </p>
                         <div className="location_services">
                         <h4>
                              Our Services
                         </h4>
                         <div className="services_list">
                              <div className="service_item">Residential Interiors</div>
                              <div className="service_item">Commercial Spaces</div>
                              <div className="service_item">Renovation</div>
                             <div className="service_item">Design Consultation</div>
                         </div>
                         </div>
                         
                         <div className="contact_info_card">
                             <div className="contact_info">
                              <span>
                                   <img src={phone_blue} alt="call" width="16px"/>
                              </span>&nbsp;&nbsp;+91 9876543230</div>
                             <div className="contact_info">
                                   <img src={clock} alt="call" width="16px"/>
                              &nbsp;&nbsp;Mon - Sat: 9:00 AM - 6:00 PM</div>
                         </div>
                         <div className="locationActionControllers">
                              <a href="javascript:void(0)" className="actionBtn actionBtn1" onClick={(()=>{
                                   setIsModalOpen(true);
                              })}> Get Free Consultation</a>

                              <a href="tel: +91 79895 83538" className="actionBtn">
                              <span>
                              <img src={phone_blue} alt="call" width="16px" />     
                              </span> 
                              Call Now</a>
                         </div>
                    </div>





                        
               </div>
          </div>
     </>
}