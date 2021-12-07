import React from "react"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import { Button } from "@chakra-ui/button"

type GeneralModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
}

const GeneralModal: React.FC<GeneralModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => (
  <Modal isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>

      <ModalBody>{children}</ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Got it, Thanks!
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default GeneralModal
