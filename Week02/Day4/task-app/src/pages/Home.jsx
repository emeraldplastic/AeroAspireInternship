import TaskList from '../components/TaskList'
import { Typography } from '@mui/material'


function Home() {
return (
<div>
<Typography variant="h4" gutterBottom>
My Tasks
</Typography>
<TaskList />
</div>
)
}


export default Home