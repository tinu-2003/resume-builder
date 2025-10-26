
import Header from '../components/Header'
import { Button, Container, Grid, Paper } from '@mui/material'
import { IoMdDocument } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
function ResumeGeneratorPage() {
  
  return (
  <>
  
  <Header/>
  {/* heading section */}
      <div className='m-5'>
      <Grid display="flex"  justifyContent="center" alignItems="center">  
        <h2>Create a job-winning Resume in minutes</h2>
      </Grid >
        </div>

        {/* card section */}
        <div>
<Container>
<Grid display="flex"  justifyContent="center" alignItems="center" gap={'50px'} margin={'30px'} className="text-center">
    <Paper className='p-5 m-5' >
      <IoMdDocument />
      <h5>Add Your Information</h5>
      <p>Add pre-written example to each section</p>
      <p>Step 1</p>
     </Paper>

        <Paper className='p-5 m-5 '  >
      <FaFileDownload />
      <h5>Download Your Resume</h5>
      <p>Download and Start applying</p>
      <p>Step 2</p>
     </Paper>

     
</Grid>
</Container>
        </div>

        {/* button section */}

        <Grid display="flex" flexDirection={'column'} justifyContent="center" alignItems="center">
          <Button variant='contained'>Let's Start</Button>
        </Grid>
        </>
 
  )
}

export default ResumeGeneratorPage