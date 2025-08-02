import "./services.css"
import kitchen from "../assets/icons/kitchen.png"
import living from "../assets/icons/living.png"
import furniture from "../assets/icons/furniture.png"
import commercial from "../assets/icons/commercial.png"
const Services = () => {
     return <div className="services section-padding" id="services">
          <h2 tabIndex={1}>Our Services</h2>
          <div className="gridRow">
               <div className="gridCol">
                    <div className="serviceCard">
                         <div className="serviceIcon">
                              <img src={living} alt="living room icon" width="100%"/>
                         </div>
                         <h3 tabIndex={1} aria-label="Full Home Interior Design" aria-describedby="FullHomeInteriorDesc">
                              Full Home Interior Design
                         </h3>
                         <p className="serviceContent" id="FullHomeInteriorDesc">
                              Transform your house into a dream home with our comprehensive Full Home Interior Design solutions. At Mancherial Interiors, we specialize in creating beautiful, functional, and personalized living spaces that reflect your lifestyle, taste, and needs 
                         </p>
       
                         <a href="#" className="learnMoreBtn">Book Now</a>
                    </div>
               </div>
               <div className="gridCol">
                    <div className="serviceCard">
                         <div className="serviceIcon">
                              <img src={kitchen} alt="kitchen icon" width="100%"/>
                         </div>
                         <h3 tabIndex={1} aria-label="Modular Kitchen" aria-describedby="modularKitchenDescription">
                              Modular Kitchen
                         </h3>
                         <p className="serviceContent" id="modularKitchenDescription">
                              At Mancherial Interiors, we blend functionality with finesse. From 3D kitchen design to on-site installation, our modular kitchens combine impeccable design, cutting‑edge functionality, and quality craftsmanship to elevate your culinary space. we offer customized modular kitchens tailored to your needs, taste, and budget.
                         </p>
                         <a href="#" className="learnMoreBtn">Book Now</a>
                         </div>
               </div>
               <div className="gridCol">
                    <div className="serviceCard">
                    <div className="serviceIcon">
                              <img src={furniture} alt="buildings icon" width="100%"/>
                    </div>
                    <h3 tabIndex={1} aria-label="Living Room & Bedroom Design" aria-describedby="LivingRoomBedroomDesc"> 
                         Living Room & Bedroom Design
                    </h3>
                    <p className="serviceContent" id="LivingRoomBedroomDesc">
                         Your living room and bedroom are the heart and soul of your home — spaces where you relax, entertain, and unwind. At Mancherial Interiors, we specialize in crafting interiors that balance comfort, functionality, and elegance, tailored to your lifestyle.
                    </p>
                    <a href="#" className="learnMoreBtn">Book Now</a>
               </div>
               </div>
            </div>
          </div>
}
export default Services;