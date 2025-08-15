import React, { useEffect } from 'react';

function Modal({ onClose, children }) {
    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            onClose();
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;