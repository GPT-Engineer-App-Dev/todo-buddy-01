import React, { useState, useEffect } from "react";
import { getTasks, createTask, deleteTask, updateTask } from "../utils/api";
import { Box, Heading, Input, Button, List, ListItem, Text, Flex, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [deadline, setDeadline] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoName, setEditedTodoName] = useState("");

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

  const handleDeleteTodo = async (todoId) => {
    try {
      await deleteTask(todoId);
      setTodos(todos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.error("Failed to delete todo", error);
    }
  };

  const handleEditTodo = (todoId, todoName) => {
    setEditingTodoId(todoId);
    setEditedTodoName(todoName);
  };

  const handleSaveTodo = async (todoId) => {
    try {
      const updatedTask = await updateTask(todoId, { name: editedTodoName });
      setTodos(todos.map((todo) => (todo.id === todoId ? updatedTask.data : todo)));
      setEditingTodoId(null);
      setEditedTodoName("");
    } catch (error) {
      console.error("Failed to update todo", error);
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
              {editingTodoId === todo.id ? (
                <>
                  <Input value={editedTodoName} onChange={(e) => setEditedTodoName(e.target.value)} placeholder="Edit todo" />
                  <Button size="sm" onClick={() => handleSaveTodo(todo.id)}>
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <Text>{todo.attributes.name}</Text>
                  {todo.attributes.deadline && (
                    <Text fontSize="sm" color="gray.500">
                      Due: {new Date(todo.attributes.deadline).toLocaleDateString()}
                    </Text>
                  )}
                  <Flex>
                    <IconButton icon={<FaEdit />} size="sm" mr={2} onClick={() => handleEditTodo(todo.id, todo.attributes.name)} />
                    <IconButton icon={<FaTrash />} size="sm" onClick={() => handleDeleteTodo(todo.id)} />
                  </Flex>
                </>
              )}
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
