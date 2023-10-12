// components/TaskList.js
"use client"
import React, { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const addTask = () => {
    if (taskName) {
      const newTask = {
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskDescription('');
      setTaskDeadline('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTaskName(taskToEdit.name);
    setTaskDescription(taskToEdit.description);
    setTaskDeadline(taskToEdit.deadline);
    setEditingTaskIndex(index);
  };

  const updateTask = () => {
    if (editingTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = {
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
        completed: tasks[editingTaskIndex].completed,
      };
      setTasks(updatedTasks);

      // Reset form inputs and editing index
      setTaskName('');
      setTaskDescription('');
      setTaskDeadline('');
      setEditingTaskIndex(null);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="mr-2 p-2 rounded border"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="mr-2 p-2 rounded border"
        />
        <label htmlFor="deadline" className="mr-2">Deadline</label>
        <input
          type="date"
          id="deadline"
          value={taskDeadline}
          onChange={(e) => setTaskDeadline(e.target.value)}
          className="mr-2 p-2 rounded border"
        />
        {editingTaskIndex !== null ? (
          <button onClick={updateTask} className="p-2 bg-blue-500 text-white rounded">
            Update Task
          </button>
        ) : (
          <button onClick={addTask} className="p-2 bg-green-500  rounded">
            Add Task
          </button>
        )}
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={`p-2 mb-2 border ${task.completed ? 'line-through' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              className="mr-2"
            />
            {task.name} - {task.description}
            <br />
            <label>Deadline: {task.deadline}</label>
            <div className="mt-2">
              <button onClick={() => editTask(index)} className="p-2 bg-blue-500  rounded mr-2">
                Edit
              </button>
              <button onClick={() => deleteTask(index)} className="p-2 bg-red-800  rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
