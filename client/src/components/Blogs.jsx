import "./Blogs.css"
import blogImg1 from "../assets/projects/residential/img1.jpg"
import blogImg2 from "../assets/projects/residential/img2.jpg"
import blogImg3 from "../assets/projects/residential/img9.jpg"
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
                             Discover the latest styles making homes in Mancherial more modern, efficient, and elegant — from smart storage to natural textures and lighting.
                         </p>
                    </div>
                    <div className="cardQuote">
                         <div className="learnMoreBtn">Read  More</div>
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
                              Explore clever layouts, multifunctional furniture, and design hacks we use to transform compact homes into spacious sanctuaries.
                         </p>
                    </div>
                    <div className="cardQuote">
                         <div className="learnMoreBtn">Read  More</div>
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
                              Learn how we blend local traditions, pooja spaces, and regional art into modern home designs that feel personal and timeless.
                         </p>
                    </div>
                    <div className="cardQuote">
                         <div className="learnMoreBtn">Read  More</div>
                    </div>
                    </div>
               </div>
           
          </div>
     </div>
}
export default Blogs;