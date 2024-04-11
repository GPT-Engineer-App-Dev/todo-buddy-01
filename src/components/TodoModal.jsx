import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Text, Textarea } from "@chakra-ui/react";

const TodoModal = ({ isOpen, onClose, todo, onSave }) => {
  const [description, setDescription] = useState(todo.description || "");

  const handleSave = () => {
    onSave({ ...todo, description });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{todo.text}</ModalHeader>
        <ModalBody>
          {todo.deadline && <Text mb={2}>Due: {todo.deadline}</Text>}
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter a description" />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TodoModal;
