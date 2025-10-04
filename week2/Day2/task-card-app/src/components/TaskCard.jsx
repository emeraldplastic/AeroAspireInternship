import React from 'react';

function TaskCard({ task }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderLeft: `5px solid ${task.completed ? '#4caf50' : '#f44336'}`,
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    }}>
      <h3 style={{ margin: '0 0 10px', color: '#2c3e50' }}>{task.title}</h3>
      <p style={{ margin: '0 0 15px', color: '#555' }}>{task.description}</p>
      <p style={{ margin: 0 }}>
        <strong>Status:</strong>{' '}
        <span style={{ color: task.completed ? '#4caf50' : '#f44336' }}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </p>
    </div>
  );
}

export default TaskCard;
