import "./SectionBanner.css"
import Modal from '../components/util/Modal';
import { useState } from 'react';
export default function SectionBanner(){
     const [isModalOpen, setIsModalOpen] = useState(false);
     const myFun = () =>{
          setIsModalOpen(true)
     }
     return <div className="Section-Banner">
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
          <div className="SBContent">
               <h3 className="text-white">Find The Best Interior Designers Near You For Your Dream Home</h3>
               <p className="text-white">
                    Your Dream Home Within Budget | Delivered 10,000+ Homes
               </p>
               <div className="theme-btn-primary ctaButton" onClick={()=>{myFun()}}>Book A Consulation</div>
          </div>
     </div>
}