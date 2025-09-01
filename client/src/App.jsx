import './App.css'
import Modal from './components/util/Modal';
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(()=>{
            const visitorUpdate = async () =>{
      try{
        const res = await fetch("https://mancherial.onrender.com/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(visitorData),
        });
      }
      catch(err){
        console.log(err)
      }

      }
      if(isModalOpen){
        visitorUpdate();
      }
    })
return (
    <div className='App' onLoad={() => setTimeout(()=>{
        setIsModalOpen(true)
    }, 6000) 
    }>
      <Header />
      <Outlet />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
      <Footer />
    </div>
  )
}

export default App
