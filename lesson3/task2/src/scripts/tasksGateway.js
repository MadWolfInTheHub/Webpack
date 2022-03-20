const baseUrl =
  "https://622c2e42087e0e041e050636.mockapi.io/tasks";

const mapTasks = (tasks) =>
  tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((tasks) => mapTasks(tasks));
};

export const creatTask = (taskData) => {
  return fetch(baseUrl, {
    method: "Post",
    headers: {
      "Content-Type": "application/json=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  console.log(taskId)
  return fetch(`${baseUrl}/${taskId}`, {
    method: "Put",
    headers: {
      "Content-Type": "application/json=utf-8",
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = (taskId) => {
  console.log(taskId)
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
};
