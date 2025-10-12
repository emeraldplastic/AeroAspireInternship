import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'


export default function Home() {
return (
<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
<Paper sx={{ p: 4, textAlign: 'center' }} elevation={3}>
<Typography variant="h3" component="h1" gutterBottom>
Welcome to My MUI App
</Typography>
<Typography variant="body1" paragraph>
This is your homepage built with Material UI's Typography and AppBar. Use this as a starting point to
add your content and components.
</Typography>
<Button variant="contained">Get Started</Button>
</Paper>
</Box>
)
}