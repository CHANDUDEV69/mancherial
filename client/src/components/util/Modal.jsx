import './Modal.css';
import Form from './Form';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close text-white" onClick={onClose}>×</button>
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