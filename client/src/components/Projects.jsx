import "./projects.css"
import img1 from "../assets/projects/residential/img1.jpg"
import img2 from "../assets/projects/residential/img2.jpg"
import img3 from "../assets/projects/residential/img3.jpg"
import img4 from "../assets/projects/residential/img4.jpg"
import img5 from "../assets/projects/residential/img5.jpg"

import img6 from "../assets/projects/residential/img6.jpg"
import img7 from "../assets/projects/residential/img7.jpg"
import img8 from "../assets/projects/residential/img8.jpg"
import img9 from "../assets/projects/residential/img9.jpg"


import { useEffect, useState } from "react"

const projectsData = [
          {name: "residential", "imgs": [img1, img2, img3, img4, img5]},
          {name: "commericial", "imgs": [img9, img6, img3, img5]},
          {name: "retail", "imgs": [img1, img7, img3, img4, img5, img6]},
          {name: "hospital", "imgs": [img1, img8, img9, img4, img5]}]

const Projects = () => {
     const [galleryImages, setGalleryImages] = useState(projectsData[0].imgs);  
     const [activeTab, setActiveTab] = useState("residential");  
     
     useEffect(()=>{
               const gallery = window.gallery;
               gallery.innerHTML = ""
               galleryImages.map((galleryImage, index)=>{
               const elem = document.createElement("div");
               elem.setAttribute("class", "galleryImage");
               const Img = new Image();
               Img.setAttribute("width", "100%");
               Img.src = galleryImage;
               elem.appendChild(Img)
               gallery.appendChild(elem);
      
          })
     })
     
     return <div className="projects section-padding" id="projects">
          <h2 tabIndex={1}>Projects</h2>
          <div className="projectTabs" id="projectTabs" >
               {projectsData.map((project, index)=>{
                    return <button key={index} onClick={(e) => { 
                         const allTabs = document.querySelectorAll(".tab");
                         allTabs.forEach((tab)=>{
                              tab.classList.remove("active")
                         })
                         e.target.classList.toggle("active");
                         setGalleryImages(project.imgs) 
                    }} type="button" tabIndex={1} className={"tab" + `${index == 0 ? " active" : ""}`}>{project.name}</button>
               })}
          </div>
          <div className="galleryImages" id="gallery">
               
          </div>


     </div>
}
export default Projects;