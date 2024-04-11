import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, FormErrorMessage, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      const userData = { username, email, password };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/login");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={4}>Register</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb={4} isInvalid={errors.username}>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <FormErrorMessage>{errors.username}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" mb={4} isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" mb={4} isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue" mb={4}>
          Register
        </Button>
      </form>
      <Link href="/login">Already have an account? Login</Link>
    </Box>
  );
};

export default Register;
