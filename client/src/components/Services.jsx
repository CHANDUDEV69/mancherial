import "./services.css"
import kitchen from "../assets/icons/kitchen.png"
import living from "../assets/icons/living.png"
import commercial from "../assets/icons/commercial.png"
const Services = () => {
     return <div className="services section-padding" id="services">
          <h2 tabIndex={1}>Our Services</h2>
          <div className="gridRow">
               <div className="gridCol">
                    <div className="serviceCard">
                         <div className="serviceIcon">
                              <img src={kitchen} alt="kitchen icon" width="100%"/>
                         </div>
                         <h3 tabIndex={1}>
                              Design Consultation
                         </h3>
                         <p className="serviceContent">
                              Explore your vision with a single-session consultation to discuss style, layout & budget. Perfect if you're seeking direction or working on a focused space like a bedroom or kitchen. 
                         </p>
                         <a href="#" className="learnMoreBtn">Learn More</a>
                    </div>
               </div>
               <div className="gridCol">
                    <div className="serviceCard">
                         <div className="serviceIcon">
                              <img src={living} alt="living room icon" width="100%"/>
                         </div>
                         <h3 tabIndex={1}>
                              Concept & Visual Planning
                         </h3>
                         <p className="serviceContent">
                              We translate your ideas into design reality through mood boards, sketches, and 2D/3D renderings. This lets you see your space before we build it. 
                         </p>
                         <a href="#" className="learnMoreBtn">Learn More</a>
                         </div>
               </div>
               <div className="gridCol">
                    <div className="serviceCard">
                    <div className="serviceIcon">
                              <img src={commercial} alt="buildings icon" width="100%"/>
                    </div>
                    <h3 tabIndex={1}> 
                         Space Planning & Layout Design
                    </h3>
                    <p className="serviceContent">
                         Maximize comfort and flow with smart floor‑plans tailored to your lifestyle. Includes furniture placement, circulation, and zone optimization.
                    </p>
                    <a href="#" className="learnMoreBtn">Learn More</a>
               </div>
               </div>
                              <div className="gridCol">
                    <div className="serviceCard">
                    <div className="serviceIcon">
                              <img src={commercial} alt="buildings icon" width="100%"/>
                    </div>
                    <h3 tabIndex={1}> 
                         Material & Finish Selection
                    </h3>
                    <p className="serviceContent">
                         Choose from a curated palette of plastics, laminates, high‑grade plywood (e.g. BWP/HDHMR), tiles, and finishes that balance aesthetics, durability, and maintenance.
                    </p>
                    <a href="#" className="learnMoreBtn">Learn More</a>
               </div>
               </div>
                              <div className="gridCol">
                    <div className="serviceCard">
                    <div className="serviceIcon">
                              <img src={commercial} alt="buildings icon" width="100%"/>
                    </div>
                    <h3 tabIndex={1}> 
                         Lighting Design & Colour Consultation
                    </h3>
                    <p className="serviceContent">
                         Lighting and colour define mood. We design lighting schemes that highlight architecture and design, and create cohesive colour palettes to reflect your personality. 
                    </p>
                    <a href="#" className="learnMoreBtn">Learn More</a>
               </div>
               </div>
                              <div className="gridCol">
                    <div className="serviceCard">
                    <div className="serviceIcon">
                              <img src={commercial} alt="buildings icon" width="100%"/>
                    </div>
                    <h3 tabIndex={1}> 
                         Custom Furniture & Accessories
                    </h3>
                    <p className="serviceContent">
                      From built-in wardrobes to custom millwork, wallpaper, soft furnishings, and décor accessories—every detail is crafted or selected to complete your space.
                    </p>
                    <a href="#" className="learnMoreBtn">Learn More</a>
               </div>
               </div>
          </div>
     </div>
}
export default Services;