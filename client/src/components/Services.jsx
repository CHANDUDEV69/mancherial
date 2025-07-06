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
                              Modular Kitchen
                         </h3>
                         <p className="serviceContent">
                              Including a modern kitchen cabinates, and a Lorem ipsum dolor sit amet consectetur, adipisicing elit 
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
                              Living Room Design
                         </h3>
                         <p className="serviceContent">
                              modern living room space of elegance  Lorem ipsum dolor sit amet consectetur, adipisicing elit
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
                         Commercial Spaces
                    </h3>
                    <p className="serviceContent">
                         Industry leastlocated on a commercial office Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    </p>
                    <a href="#" className="learnMoreBtn">Learn More</a>
               </div>
               </div>
          </div>
     </div>
}
export default Services;