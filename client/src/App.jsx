import './App.css'
import Modal from './components/util/Modal';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
return (
    <div className='App' onLoad={() => setTimeout(()=>{
        setIsModalOpen(true)
    }, 3000) 
    }>
      <Header />
      <Outlet />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
      <Footer />
    </div>
  )
}

export default App
