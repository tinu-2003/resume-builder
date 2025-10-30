import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { IoMdDocument } from 'react-icons/io';
import { FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ResumeGeneratorPage() {
  return (
    <>
      <Header />

      {/* Heading section */}
      <Box sx={{ my: 5 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Typography variant="h4" component="h2" align="center">
            Create a job-winning Resume in minutes
          </Typography>
        </Grid>
      </Box>

      {/* Card section */}
      <Container>
        <Grid 
          container 
          spacing={6} 
          justifyContent="center" 
          alignItems="stretch" 
          sx={{ my: 4, textAlign: 'center' }}
        >
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 5, m: 2, height: '100%',  width:'500px' }} elevation={3}>
              <Box sx={{ fontSize: 40, mb: 2 }}><IoMdDocument /></Box>
              <Typography variant="h5" component="h5" gutterBottom>
                Add Your Information
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Add pre-written example content to each section.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Step 1
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} >
            <Paper sx={{ p: 5, m: 2, height: '100%' , width:'500px' }} elevation={3}>
              <Box sx={{ fontSize: 40, mb: 2 }}><FaFileDownload /></Box>
              <Typography variant="h5" component="h5" gutterBottom>
                Download Your Resume
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Download and Start applying
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Step 2
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Button section */}
      <Grid container justifyContent="center" alignItems="center" sx={{ mb: 5, mt:15 }}>
        <Link to={'/form'} style={{ textDecoration: 'none' }}>
          <Button variant='contained'>
            Let's Start
          </Button>
        </Link>
      </Grid>
    </>
  );
}

export default ResumeGeneratorPage;
