import {
  Box,
  Container,
  Flex,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import CreateUserModal from "./CreateUserModal";

import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"900px"}>
      <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/* Left side */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <Text fontSize={"40px"}>👭</Text>
          </Flex>
          {/* Right Side  */}
          <Flex>
            <Flex gap={3} alignItems={"center"}>
              <Text
                fontSize={"lg"}
                fontWeight={500}
                display={{ base: "none", md: "block" }}
              >
                BFFShip 🔥
              </Text>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
              </Button>
              <CreateUserModal />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
