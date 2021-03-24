import { API } from "../../backend";

// Get all tasks
export const getAllTasks = () => {
  return fetch(`${API}/`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Create task
export const createTask = (task) => {
  return fetch(`${API}/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// update task status
export const updateTask = (taskId, status) => {
  return fetch(`${API}/update/${taskId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(status)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};