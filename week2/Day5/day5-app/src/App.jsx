import React, { useState, useMemo } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, TextField,
  Button, Container, List, ListItem, ListItemText
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const initialTasks = [
  { id: 1, title: 'Learn React', done: false },
  { id: 2, title: 'Build Task App', done: true },
  { id: 3, title: 'Polish UI', done: false },
];

export default function App() {
  const [tasks] = useState(initialTasks);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          ...(darkMode
            ? {
                background: {
                  default: '#121212',
                  paper: '#1d1d1d',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#bbbbbb',
                },
              }
            : {}),
        },
      }),
    [darkMode]
  );

  const filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase()) &&
    (filter === 'all' || (filter === 'done' && t.done) || (filter === 'todo' && !t.done))
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color={darkMode ? 'default' : 'primary'}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task App
          </Typography>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Search tasks..."
          variant="outlined"
          value={query}
          onChange={e => setQuery(e.target.value)}
          sx={{
            mb: 2,
            input: { color: darkMode ? '#fff' : undefined },
            label: { color: darkMode ? '#bbb' : undefined },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: darkMode ? '#555' : undefined,
              },
              '&:hover fieldset': {
                borderColor: darkMode ? '#888' : undefined,
              },
            },
          }}
        />

        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['all', 'done', 'todo'].map(f => (
            <Button
              key={f}
              variant={filter === f ? 'contained' : 'outlined'}
              onClick={() => setFilter(f)}
              sx={{
                ...(darkMode && {
                  borderColor: '#555',
                  color: filter === f ? '#fff' : '#ccc',
                  backgroundColor: filter === f ? '#333' : 'transparent',
                  '&:hover': {
                    backgroundColor: filter === f ? '#444' : '#222',
                  },
                }),
              }}
            >
              {f}
            </Button>
          ))}
        </div>

        <List>
          {filtered.map(t => (
            <ListItem
              key={t.id}
              divider
              sx={{
                backgroundColor: darkMode ? '#1d1d1d' : undefined,
              }}
            >
              <ListItemText
                primary={t.title}
                secondary={t.done ? 'Done' : 'Pending'}
                primaryTypographyProps={{
                  color: darkMode ? 'white' : 'inherit',
                }}
                secondaryTypographyProps={{
                  color: darkMode ? 'grey.400' : 'inherit',
                }}
              />
            </ListItem>
          ))}
          {filtered.length === 0 && (
            <Typography variant="body2" color={darkMode ? 'grey.400' : 'inherit'}>
              No tasks found
            </Typography>
          )}
        </List>
      </Container>
    </ThemeProvider>
  );
}
