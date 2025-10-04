import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Home, Info, AddCircle } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
const location = useLocation();


return (
<AppBar position="static">
<Toolbar>
<Typography variant="h6" sx={{ flexGrow: 1 }}>
Task App
</Typography>
<Button
color={location.pathname === "/" ? "secondary" : "inherit"}
component={Link}
to="/"
>
<Home fontSize="small" sx={{ mr: 0.5 }} /> Home
</Button>
<Button
color={location.pathname === "/add" ? "secondary" : "inherit"}
component={Link}
to="/add"
>
<AddCircle fontSize="small" sx={{ mr: 0.5 }} /> Add Task
</Button>
<Button
color={location.pathname === "/about" ? "secondary" : "inherit"}
component={Link}
to="/about"
>
<Info fontSize="small" sx={{ mr: 0.5 }} /> About
</Button>
</Toolbar>
</AppBar>
);
}


export default Navbar;