import { useEffect } from 'react';
import Modal from 'react-modal';

function ModalComponent({ isOpen, onRequestClose, children }) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" 
    className=" rounded-lg mx-auto w-full sm:w-3/4 lg:w-1/2 max-h-full overflow-y-auto"
  >
    {children}
  </Modal>
  );
}

export default ModalComponent;