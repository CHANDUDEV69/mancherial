
import "./Banner.css"
import telephone from "../assets/icons/telephone.svg"
import whatsapp from "../assets/icons/whatsapp.svg"
import interior from "../assets/interior.mp4"

const Banner = () => {
     return <div className="Banner">
          <div className="bannerContent theme-section-padding">
               <h1 className="text-white" tabIndex={1}>
                    Transforming Spaces <br />
                    with Elegance and Innovation
               </h1>
               <p className="py-1 text-white" tabIndex={1}>
                    Mancherial's trusted interior design agency
               </p>
               <div className="actionControllers">
                    <a href="#projects" className="theme-btn-primary ctaButton text-theme" tabIndex={1}>View Portfolio</a>
                    <a href="#ContactUs" className="theme-btn-primary theme-btn-primary-reverse ctaButton text-theme" tabIndex={1}>Book Consultation</a>

               </div>
          </div>
          
          {/* Animated Circles */}
          <div className="floating-circles">
               <div className="circle circle-1"></div>
               <div className="circle circle-2"></div>
               <div className="circle circle-3"></div>
               <div className="circle circle-4"></div>
               <div className="circle circle-5"></div>
               <div className="circle circle-6"></div>
          </div>
          
          <div className="contactIcons">
               <div className="phone contactIcon">
                    <a href="tel:+91 9985599039">
                         <img src={telephone} alt="" />
                    </a>
               </div>
               <div className="Whatsapp contactIcon">
                    <a href="https://wa.me/+91 79895 83538">
                         <img src={whatsapp} alt="" />
                    </a>
               </div>
          </div>
          <video className="bannerVideo" src={interior} width="100%" muted autoPlay loop></video>
     </div>
}

export default Banner;
