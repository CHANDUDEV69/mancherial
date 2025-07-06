import "./Banner.css"
import telephone from "../assets/icons/telephone.svg"
import whatsapp from "../assets/icons/whatsapp.svg"
import interior from "../assets/interior.mp4"
const Banner = () => {
     return <div className="Banner">
          <div className="bannerContent theme-section-padding">
          <h1 className="text-white">
               Mancherial Interior Designs
          </h1>
          <p className="py-1 text-white">
               Lorem ipsum dolor sit amet, nam te agam soleat cetero, his ad exerci quodsi sententiae putent bonorum ne. Lorem ipsum dolor sit amet,
          </p>
          <button className="theme-btn-primary ctaButton text-theme">Get A Quote</button>
          </div>
          <div className="contactIcons">
               <div className="phone contactIcon">
                    <a href="tel:+919876543210">
                         <img src={telephone} alt="" />
                    </a>
               </div>
               <div className="Whatsapp contactIcon">
                    <a href="https://wa.me/+919876543210">
                         <img src={whatsapp} alt="" />
                    </a>
               </div>
          </div>
          <video className="bannerVideo" src={interior} width="100%" muted autoPlay loop></video>

     </div>
}
export default Banner;