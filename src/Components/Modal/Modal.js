import { useState } from "react";
import { Modal, Button } from "react-bootstrap";


// Modal window.
export const ModalWindow = ({ opt, callback }) => {
  // UseState Definitions.
  const [show, setShow] = useState(false);
  const [settings, setSettings] = useState(opt);

  // Utils.
  const Storage = window.localStorage;

  // Handlers functions.
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    e.preventDefault();
    setSettings({
      ...settings,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    setShow(false);
    callback(settings)
    Storage.setItem('settings', JSON.stringify(settings));
    console.log(settings);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Custom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <input id="wallpaper-input" name="background" type="text" onChange={handleChange} />
            <input id="blur-input" name="blur" type="text" onChange={handleChange} />
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
