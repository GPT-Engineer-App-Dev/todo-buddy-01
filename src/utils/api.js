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

export const updateTask = async (taskId, taskData) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  return response.json();
};

export const deleteTask = async (taskId) => {
  await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE",
  });
};
