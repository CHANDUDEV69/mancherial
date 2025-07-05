import "./Blogs.css"
import blogImg1 from "../assets/projects/residential/img1.jpg"
import blogImg2 from "../assets/projects/residential/img2.jpg"
import blogImg3 from "../assets/projects/residential/img7.jpg"
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
                    <h4>Interior Design Plans</h4>
                    </div>
                    <div className="cardContent">
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut deserunt
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
                    <h4>Let's feel the ambience</h4>
                    </div>
                    <div className="cardContent">
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut deserunt
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
                    <h4>Beuty of Geometry</h4>
                    </div>
                    <div className="cardContent">
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut deserunt
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