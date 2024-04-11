import React from "react";
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <Box bg="gray.100" py={4}>
      <Flex maxWidth="800px" margin="auto" alignItems="center">
        <Heading size="md">Todo App</Heading>
        <Spacer />
        <Box>
          {isAuthenticated ? (
            <>
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
              <Link to="/pricing" mr={4}>
                Pricing
              </Link>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/register" mr={4}>
                Register
              </Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
