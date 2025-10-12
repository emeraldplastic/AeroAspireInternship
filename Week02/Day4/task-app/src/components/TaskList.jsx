import { useEffect, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'


function TaskList() {
const [tasks, setTasks] = useState([])


useEffect(() => {
const saved = JSON.parse(localStorage.getItem('tasks')) || []
setTasks(saved)
}, [])


return (
<div>
{tasks.length === 0 && <Typography>No tasks yet.</Typography>}
{tasks.map((task, i) => (
<Card key={i} sx={{ mb: 2 }}>
<CardContent>
<Typography>{task}</Typography>
</CardContent>
</Card>
))}
</div>
)
}


export default TaskList