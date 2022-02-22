import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// Modal window.
export const ModalWindow = ({ handleChange, callback }) => {
  // UseState Definitions.
  const [show, setShow] = useState(false);
  const [settings, setSettings] = useState({
    name: "",
    url: ""
  });

  // Utils.
  const Storage = window.localStorage;

  // Handlers functions.
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    setShow(false);
    callback(e);
  }

  return (
    <>
      <button className="text-muted add-button btn" onClick={handleShow}>
        +
      </button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Add</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <form action="" className="text-dark">
            <h5>Title:</h5>
            <input id="title-input" name="name" type="text" onChange={handleChange} />
            <h5>Link:</h5>
            <input id="link-input" name="url" type="text" onChange={handleChange} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
