import React, { useState, useEffect } from "react";
import { getTasks, createTask } from "../utils/api";
import { Box, Heading, Input, Button, List, ListItem, Text, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTasks();
        setTodos(response.data);
      } catch (error) {
        console.error("Failed to fetch todos", error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      try {
        const newTask = await createTask({ name: newTodo, deadline });
        setTodos([...todos, newTask.data]);
        setNewTodo("");
        setDeadline("");
      } catch (error) {
        console.error("Failed to add todo", error);
      }
    }
  };

  return (
    <Box maxWidth="500px" margin="auto" mt={8}>
      <Heading mb={4}>Todo App</Heading>
      <Box mb={4}>
        <FormControl id="todoName" mb={2}>
          <FormLabel>Todo Name</FormLabel>
          <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" />
        </FormControl>
        <FormControl id="deadline" mb={2}>
          <FormLabel>Deadline</FormLabel>
          <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </FormControl>
        <Button onClick={handleAddTodo} colorScheme="blue">
          <FaPlus /> Add Todo
        </Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo) => (
          <ListItem key={todo.id} p={2} borderWidth={1} borderRadius="md">
            <Flex alignItems="center" justifyContent="space-between">
              <Text>{todo.attributes.name}</Text>
              {todo.attributes.deadline && (
                <Text fontSize="sm" color="gray.500">
                  Due: {new Date(todo.attributes.deadline).toLocaleDateString()}
                </Text>
              )}
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
