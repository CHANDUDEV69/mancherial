import "./Footer.css";
import Logo from "../assets/logo-white.png"
const Footer = () => {
     return <div className="footer theme-section-padding">
          <div className="gridRow">
               <div className="gridCol">
                    <div className="footerLogo">
                         <img src={Logo} alt="Mancherial Interior Logo" width="100%" />
                    </div>
                    <div className="footerAddress">
    
                         <p className="quote">
                              "We believe every space has a story — our mission is to bring that story to life through timeless, thoughtful design."
                         </p>
                         <p>
                              Near XYZ Landmark, Mancherial, Telangana
                         </p>
                    </div>
               </div>
               <div className="gridCol">
                    <h3 className="text-white">Quick Links</h3>
                    <ul className="quickLinks">
                         <li><a href="#services">WHAT WE DO</a></li>
                         <li><a href="#whychooseus">WHY CHOOSE US</a></li>
                         <li><a href="#projects">PROJECTS</a></li>
                         <li><a href="#blogs">BLOGS</a></li>
                         <li><a href="#ContactUs" className="end">CONTACT</a></li>
                    </ul>
               </div>
               <div className="gridCol">
                    <h3 className="text-white">Useful Links</h3>
                    <ul className="siteLinks">
                         <li><a href="/sitemap">SITE MAP</a></li>
                         <li><a href="/termsnconditions">TERMS AND CONDITOINS</a></li>
                         <li><a href="/feedback">FEEDBACK</a></li>
                    </ul>
               </div>
          </div>
          <div className="copyRigit">
               <p className="text-center">
                    All &copy;copyrights 2025 reserved.
               </p>
          </div>
     </div>
}
export default Footer;