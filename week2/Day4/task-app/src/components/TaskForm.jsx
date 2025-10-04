import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button } from '@mui/material'


function TaskForm() {
const [task, setTask] = useState('')
const navigate = useNavigate()


const handleSubmit = (e) => {
e.preventDefault()
if (!task.trim()) return


const saved = JSON.parse(localStorage.getItem('tasks')) || []
saved.push(task)
localStorage.setItem('tasks', JSON.stringify(saved))


setTask('')
navigate('/')
}


return (
<form onSubmit={handleSubmit}>
<TextField
fullWidth
label="Enter task"
value={task}
onChange={e => setTask(e.target.value)}
sx={{ mb: 2 }}
/>
<Button variant="contained" type="submit">
Save Task
</Button>
</form>
)
}


export default TaskForm