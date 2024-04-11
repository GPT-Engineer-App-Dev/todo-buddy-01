import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, Text, Flex } from "@chakra-ui/react";
import { FaPlus, FaCheck } from "react-icons/fa";
import TodoModal from "../components/TodoModal";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [deadlines, setDeadlines] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false, deadline: "", description: "" }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeadlineChange = (index, date) => {
    const updatedDeadlines = [...deadlines];
    updatedDeadlines[index] = date;
    setDeadlines(updatedDeadlines);
  };

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
  };

  const handleSaveTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => (todo === selectedTodo ? updatedTodo : todo));
    setTodos(updatedTodos);
    setSelectedTodo(null);
  };

  return (
    <Box maxWidth="500px" margin="auto" mt={8}>
      <Heading mb={4}>Todo App</Heading>
      <Box display="flex" mb={4}>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTodo()} placeholder="Enter a new todo" mr={2} />
        <Button onClick={handleAddTodo} colorScheme="blue">
          <FaPlus />
        </Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
            <Flex alignItems="center">
              <Text as={todo.completed ? "del" : "span"} mr={2} cursor="pointer" onClick={() => handleTodoClick(todo)}>
                {todo.text}
              </Text>
              {deadlines[index] && (
                <Text fontSize="sm" color="gray.500">
                  Due: {deadlines[index]}
                </Text>
              )}
            </Flex>
            <Flex alignItems="center">
              <Input type="date" size="sm" value={deadlines[index] || ""} onChange={(e) => handleDeadlineChange(index, e.target.value)} mr={2} />
              <Button size="sm" onClick={() => handleToggleTodo(index)} colorScheme={todo.completed ? "green" : "gray"}>
                <ListIcon as={FaCheck} />
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
      <TodoModal isOpen={selectedTodo !== null} onClose={() => setSelectedTodo(null)} todo={selectedTodo || {}} onSave={handleSaveTodo} />
    </Box>
  );
};

export default Index;
