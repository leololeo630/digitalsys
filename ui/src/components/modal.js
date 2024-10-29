import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, handleClose, modalResponse }) => {
  return (
    <Modal show={show} onHide={handleClose} centered >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">{modalResponse.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-center'>
        {modalResponse.texto}
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button variant={modalResponse.classe} onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
