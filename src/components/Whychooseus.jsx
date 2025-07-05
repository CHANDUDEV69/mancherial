import "./whychooseus.css"
import TestimonialSlider from "./util/TestimonialSlider";
const Whychooseus = () => {
     
     return <div className="whyChooseUs section-padding" id="whychooseus">
           <h2 tabIndex={1}>Why Choose Us</h2>
                    <div className="gridRow">
                         <div className="gridCol">
                              <div className="wcCard">
                                   <ul className="highlilghts">
                                        <li tabIndex={1}>10+ Years of experience</li>
                                        <li tabIndex={1}> Experienced & Passionate Designers</li>
                                        <li tabIndex={1}>Guaranteed Aesthetic Excellence</li>
                                        <li tabIndex={1}>Tailored Solutions for Every Client</li>
                                        <li tabIndex={1}>End-to-End Service</li>
                                   </ul>
                              </div>
                         </div>
                         <div className="gridCol col2">
                              <div className="testimonials">
                                   <h3 className="text-white">What Our Customers Say</h3>
                                   <TestimonialSlider />
                              </div>
                         </div>
                         
                    </div>
     </div>
}
export default Whychooseus;