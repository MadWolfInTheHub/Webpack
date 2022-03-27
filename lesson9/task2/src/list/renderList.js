import { getItem, setItem } from './storage';
import { renderTasks } from './renderer';
import { getTasksList, updateTask, deleteTask } from './tasksGateway';

export const onToggleTask = (event) => {
  const taskId = event.target.dataset.id;
  const tasks = getItem('tasksList');
  const { text, creatDate } = tasks.find((task) => task.id === taskId);

  const done = event.target.checked;

  const updatedTask = {
    text,
    creatDate,
    done,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onDeleteTask = (event) => {
  const taskId = event.target.dataset.id;
  /*   const { text, creatDate } = tasks.find((task) => task.id === taskId); */

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
