import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <>
    <Box >
      <Paper  elevation={24} sx={{
        width:650,
        // height:750,
        padding:10
      }}>
       

       <Typography variant='h4' align='center' >Name</Typography>
       <Typography variant='h4' align='center' >Title</Typography>
       <Typography variant='h6' align='center' >Phone|email|location</Typography>

       <Divider className='mt-5'>Summary </Divider>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente beatae vitae ea aliquid! Dolor, saepe ratione. Voluptatum labore at quae esse necessitatibus est autem debitis distinctio earum, harum possimus magni.</p>


       <Divider className='mt-3'>Education </Divider>

       <Typography variant='h4' align='center' >Education Stream</Typography>
       <Typography variant='h4' align='center' >colg|universcity|year</Typography>

       <Divider className='mt-3'>Professional Experience </Divider>

       <Typography variant='h4' align='center' >profestion</Typography>
       <Typography variant='h6' align='center' >instut|place|year</Typography>


         <Divider className='mt-3'>Skills </Divider>
         <Button variant='contained' className='m-3'>react</Button>
         <Button variant='contained' className='m-3'>react</Button>
         <Button variant='contained' className='m-3'>react</Button>
         <Button variant='contained' className='m-3'>react</Button>
       



       

      </Paper>
    </Box>
    
    </>
  )
}

export default Preview