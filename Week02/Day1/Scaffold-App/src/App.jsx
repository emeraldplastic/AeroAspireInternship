import React from 'react'
import Container from '@mui/material/Container'
import TopAppBar from './components/TopAppBar'
import Home from './pages/Home'


export default function App() {
return (
<>
<TopAppBar />
{/* give top space so content is not hidden behind fixed AppBar */}
<Container sx={{ mt: 8 }}>
<Home />
</Container>
</>
)
}