import './Modal.css';
import Form from './Form';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const keyStrokeHandler = (e) => {
    if(e.key === "Escape"){
      onClose();
    }
  }
  document.addEventListener('keydown', keyStrokeHandler);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close text-white" onClick={onClose}>x</button>
        {children}
          <div className="popupForm gridRow">
               <div className="gridCol">
                    <Form />
               </div>
          </div>
      </div>
    </div>
  );
};

export default Modal;