import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import {
  Button,
  Modal,
  useDisclosure,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  FormControl,
  Flex,
  FormLabel,
  Input,
  Text,
  Radio,
  ModalFooter,
  RadioGroup,
  IconButton,
} from "@chakra-ui/react";

const EditModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton onClick={onOpen}>
        <BiAddToQueue size={20} />
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My new BFF 😍</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems={"center"} gap={4}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="John Doe" />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input type="text" placeholder="Software Engineer" />
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Text
                resize={"none"}
                overFlowY={"hidden"}
                placeholder={
                  "He's a software engineer who loves to code and build things."
                }
              />
            </FormControl>
            <RadioGroup defaultValue="Male" mt={4}>
              <Flex gap={4}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="nonbinary">Non-binary</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
