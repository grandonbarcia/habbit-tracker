import React from "react";

import { Modal, Button } from "react-bootstrap";

import Journal from "./Journal";
import HabbitToggleList from "./HabbitToggleList";

const InputModal = ({
  show,
  handleClose,
  handleClick,
  displayDate,
  handleJournal,
  habitsTracked,
  setHabitsTracked,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{displayDate}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HabbitToggleList
          habitsTracked={habitsTracked}
          setHabitsTracked={setHabitsTracked}
        />

        <Journal handleJournal={handleJournal} habitsTracked={habitsTracked} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InputModal;
