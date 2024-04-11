import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { FaPlus, FaCheck } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={4}>Todo App</Heading>
      <Box display="flex" mb={4}>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={2} />
        <Button onClick={handleAddTodo} colorScheme="blue">
          <FaPlus />
        </Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
            <Text as={todo.completed ? "del" : "span"}>{todo.text}</Text>
            <Button size="sm" onClick={() => handleToggleTodo(index)} colorScheme={todo.completed ? "green" : "gray"}>
              <ListIcon as={FaCheck} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
