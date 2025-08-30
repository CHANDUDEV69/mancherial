import "./Blogs.css"
import blogImg1 from "../assets/projects/residential/img1.jpg"
import blogImg2 from "../assets/projects/residential/img2.jpg"
import blogImg3 from "../assets/projects/residential/img9.jpg"
import { Link } from "react-router-dom"
const Blogs = () => {
     return <div className="Blogs section-padding" id="blogs">
          <h2 tabIndex={1}>Blogs</h2>
          <div className="gridRow">
               <div className="gridCol">
                    <div className="card">
                           <div className="cardImg">
                         <img src={blogImg1} alt="blog image" width="100%" />
                    </div>
                    <div className="cardTitle">
                    <h4>Top Interior Design Trends in Mancherial – 2025 Edition</h4>
                    </div>
                    <div className="cardContent">
                         <p>
                              Interior design in 2025 is all about personalization, sustainability, and functionality. For homeowners in Suryanagar and across the city, the demand for stylish yet practical spaces is growing rapidly ...
                         </p>
                    </div>
                    <div className="cardQuote">
                         <Link to="/1" className="learnMoreBtn">Read  More</Link>
                    </div>
    
                    </div>
               </div>
               <div className="gridCol">
                    <div className="card">
                           <div className="cardImg">
                         <img src={blogImg3} alt="blog image" width="100%" />
                    </div>
                    <div className="cardTitle">
                    <h4>Small Spaces, Big Style: 2BHK Apartment Design Ideas</h4>
                    </div>
                    <div className="cardContent">
                         <p>
                              Designing a 2BHK apartment in Mancherial can be a big challenge, especially when space is limited. Most 2BHK homes have smaller bedrooms, a compact kitchen, and a small living room ...
                         </p>
                    </div>
                    <div className="cardQuote">
                         <Link to="/2" className="learnMoreBtn">Read  More</Link>
                    </div>
               </div>
               </div>
               <div className="gridCol">
                    <div className="card">
                           <div className="cardImg">
                         <img src={blogImg2} alt="blog image" width="100%" />
                    </div>
                    <div className="cardTitle">
                    <h4>Traditional Meets Modern: Telugu-Inspired Interiors</h4>
                    </div>
                    <div className="cardContent">
                         <p>
                          Your home is more than just walls and furniture—it’s a place where you create memories and feel comfortable. In Mancherial, many families are now choosing modern interior designs because they make homes look stylish and ...
                         </p>
                    </div>
                    <div className="cardQuote">
                         <Link to="/3" className="learnMoreBtn">Read  More</Link>
                    </div>
                    </div>
               </div>
           
          </div>
     </div>
}
export default Blogs;