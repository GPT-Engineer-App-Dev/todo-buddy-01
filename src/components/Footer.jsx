import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" py={4} mt={8}>
      <Box maxWidth="800px" margin="auto" textAlign="center">
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Todo App. All rights reserved.</Text>
        <Box mt={2}>
          <Link href="#" mr={4}>
            Privacy Policy
          </Link>
          <Link href="#">Terms of Service</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
