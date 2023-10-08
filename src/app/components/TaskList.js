// components/TaskList.js
import React from 'react';

export default function TaskList({ tasks }) {
  return (
    <div>
      <h2 className="text-lg font-semibold">Task List</h2>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
