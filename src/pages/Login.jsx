import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, FormErrorMessage, Link, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData && userData.username === username && userData.password === password) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/");
      } else {
        setLoginError(true);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={4}>Login</Heading>
      {loginError && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          Invalid username or password
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb={4} isInvalid={errors.username}>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <FormErrorMessage>{errors.username}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" mb={4} isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue" mb={4}>
          Login
        </Button>
      </form>
      <Link href="/register">Don't have an account? Register</Link>
    </Box>
  );
};

export default Login;
