import React from "react";
import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxWidth="800px" margin="auto" alignItems="center">
        <Heading size="md">Todo App</Heading>
        <Spacer />
        <Box>
          <Link mr={4}>Home</Link>
          <Link mr={4}>About</Link>
          <Link>Contact</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
