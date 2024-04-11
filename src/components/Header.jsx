import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxWidth="800px" margin="auto" alignItems="center">
        <Heading size="md">Todo App</Heading>
        <Spacer />
        <Box>
          <Link to="/" mr={4}>
            Home
          </Link>
          <Link to="/about" mr={4}>
            About
          </Link>
          <Link to="/contact" mr={4}>
            Contact
          </Link>
          <Link to="/widgets" mr={4}>
            Widgets
          </Link>
          <Link to="/gallery" mr={4}>
            Gallery
          </Link>
          <Link to="/pricing">Pricing</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
