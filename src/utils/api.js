const API_URL = "http://localhost:1337/api";

export const createTask = async (taskData) => {
  const payload = {
    data: {
      name: taskData.name,
    },
  };

  if (taskData.deadline) {
    payload.data.deadline = taskData.deadline;
  }

  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
};

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};



export const deleteTask = async (taskId) => {
  try {
    await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Failed to delete todo", error);
    throw error;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: taskData }),
    });
    return response.json();
  } catch (error) {
    console.error("Failed to update todo", error);
    throw error;
  }
};
