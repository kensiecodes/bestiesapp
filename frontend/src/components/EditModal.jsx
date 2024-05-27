import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { BASE_URL } from "../App";

const EditModal = ({ setUsers, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: user.name,
    role: user.role,
    description: user.description,
    gender: user.gender,
  });
  const toast = useToast();

  const handleEditUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}friends/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? data : u))
      );

      toast({
        status: "success",
        title: "Yayy! 🎉",
        description: "User updated successfully",
        duration: 2000,
        position: "top-center",
      });
    } catch (error) {
      toast({
        status: "error",
        title: "Oh no! An error occurred 😢",
        description: error.message,
        duration: 2000,
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <IconButton onClick={onOpen}>
        <BiAddToQueue size={20} />
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleEditUser}>
          <ModalContent>
            <ModalHeader>My new BFF 😍</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex alignItems={"center"} gap={4}>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    type="text"
                    placeholder="Software Engineer"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, role: e.target.value }))
                    }
                  />
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
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
