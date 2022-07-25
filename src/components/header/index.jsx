import AnchorIcon from '@mui/icons-material/Anchor';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link, { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <AnchorIcon className='icon-header'/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"> TB SHOP </Link>
          </Typography>
          
          <NavLink to="/todos">
            <Button color="inherit">Todo</Button>
          </NavLink>
         
          <NavLink to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLink>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
