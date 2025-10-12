import React from 'react';
import TaskCard from './components/TaskCard';

function App() {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Do homework', completed: true },
    { id: 2, title: 'Task 2', description: 'Wash dishes', completed: false },
    { id: 3, title: 'Task 3', description: 'Read a book', completed: false },
    { id: 4, title: 'Task 4', description: 'Go for a walk', completed: true }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task List</h1>

      <div style={styles.taskList}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#2c3e50',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#3f51b5',
  },
  taskList: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
};

export default App;
