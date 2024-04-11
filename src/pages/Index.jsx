import React, { useState, useEffect } from "react";
import { createTask, getTasks, updateTask, deleteTask } from "../utils/api";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, Text, Flex } from "@chakra-ui/react";
import { FaPlus, FaCheck } from "react-icons/fa";
import TodoModal from "../components/TodoModal";

const Index = () => {
  const [todos, setTodos] = useState({ data: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTasks();
        setTodos(response.data);
      } catch (error) {
        setError("Failed to fetch todos");
      }
    };

    fetchTodos();
  }, []);
  const [newTodo, setNewTodo] = useState("");
  const [deadlines, setDeadlines] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      try {
        const newTask = await createTask({ name: newTodo, deadline: "" });
        setTodos([...todos, newTask]);
        setNewTodo("");
      } catch (error) {
        setError("Failed to add todo");
      }
      setNewTodo("");
    }
  };

  const handleToggleTodo = async (todo) => {
    try {
      const updatedTask = await updateTask(todo.id, { ...todo, completed: !todo.completed });
      setTodos(todos.map((t) => (t.id === todo.id ? updatedTask : t)));
    } catch (error) {
      setError("Failed to update todo");
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      await deleteTask(todoId);
      setTodos(todos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      setError("Failed to delete todo");
    }
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
        {Array.isArray(todos.data) &&
          todos.data.map((todo, index) => (
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
                <Button size="sm" onClick={() => handleToggleTodo(todo)} colorScheme={todo.completed ? "green" : "gray"} mr={2}>
                  <ListIcon as={FaCheck} />
                </Button>
                <Button size="sm" onClick={() => handleDeleteTodo(todo.id)} colorScheme="red">
                  Delete
                </Button>
              </Flex>
            </ListItem>
          ))}
      </List>
      {error && (
        <Text color="red.500" mt={4}>
          {error}
        </Text>
      )}
      <TodoModal isOpen={selectedTodo !== null} onClose={() => setSelectedTodo(null)} todo={selectedTodo || {}} onSave={handleSaveTodo} />
    </Box>
  );
};

export default Index;
