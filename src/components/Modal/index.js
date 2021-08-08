import React, { useState } from "react";
import Modal from "react-modal";

const DefaultModal = ({ className, overlayClassName, message }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <Modal
      className={className}
      overlayClassName={overlayClassName}
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal()}
    >
      <h2>{message}</h2>
    </Modal>
  );
};

export default DefaultModal;
