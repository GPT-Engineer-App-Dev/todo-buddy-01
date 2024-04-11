import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box maxWidth="800px" margin="auto" mt={8}>
      <Heading mb={4}>About Todo App</Heading>
      <Text mb={4}>The Todo App is a simple and intuitive application that helps you manage your tasks and stay organized. With its user-friendly interface and powerful features, you can easily create, track, and complete your todos.</Text>
      <Text mb={4}>Key features of the Todo App include:</Text>
      <ul>
        <li>Create and manage multiple todo lists</li>
        <li>Set deadlines and reminders for your tasks</li>
        <li>Mark todos as completed and track your progress</li>
        <li>Customize and prioritize your todos</li>
      </ul>
      <Text mt={4}>Start using the Todo App today and take control of your tasks and productivity!</Text>
    </Box>
  );
};

export default About;
