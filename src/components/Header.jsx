import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function Header() {
  return (
    <>
    
     <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            R-builder
          </Typography>
            <Tooltip title="Our intuitive resume builder simplifies the entire process, letting you create a professional, job-winning CV in minutes—not hours. Forget complicated formatting and endless revisions. We provide expert-approved templates and step-by-step guidance so you can focus on what truly matters: showcasing your skills and experience to land your dream job. Build your best resume, faster, and stand out from the competition.">

               <Button color="inherit">About Us</Button>
            </Tooltip>
         
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header