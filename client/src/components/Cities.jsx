import "./Cities.css";
import SectionBanner from "./SectionBanner";
import CityImg from "../assets/bgsmall.jpg"
export default function Cities(){
     return <>
          <SectionBanner />
          <div className="cities section-padding">
               <h3 className="text-center">
                    Explore 51,040+ Interior Design Possibilities At Our Experience Centers
               </h3>
               <p className="text-center my-1 font-500 text-medium">12 Cities | 18 Experience Centers</p>
               <div className="citiesList">
                    <a href="/bangalore" className="city">
                         <div className="cityImg">
                              <img src={CityImg} alt="banglore interior design" />
                         </div>
                         <div className="cityTitle text-white">Ramagundam</div>
                    </a>
                     <a href="/bangalore" className="city">
                         <div className="cityImg">
                              <img src={CityImg} alt="banglore interior design" />
                         </div>
                         <div className="cityTitle text-white">Godavarikhani</div>
                    </a>
                     <a href="/bangalore" className="city">
                         <div className="cityImg">
                              <img src={CityImg} alt="banglore interior design" />
                         </div>
                         <div className="cityTitle text-white">Bellampalli </div>
                    </a>
                     <a href="/bangalore" className="city">
                         <div className="cityImg">
                              <img src={CityImg} alt="banglore interior design" />
                         </div>
                         <div className="cityTitle text-white">Peddapalli </div>
                    </a>
                                         <a href="/bangalore" className="city">
                         <div className="cityImg">
                              <img src={CityImg} alt="banglore interior design" />
                         </div>
                         <div className="cityTitle text-white">Peddapalli </div>
                    </a>
                    <a href="/bangalore" className="city">
                         <div className="cityImg">
                              <img src={CityImg} alt="banglore interior design" />
                         </div>
                         <div className="cityTitle text-white">Peddapalli </div>
                    </a>
                    
               </div>
               {/* <div className="theme-btn-primary ctaButton">Book A Consulation</div> */}
          </div>
     </>
}