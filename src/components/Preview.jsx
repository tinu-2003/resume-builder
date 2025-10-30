import { Box, Button, Divider, Paper, Typography } from '@mui/material'
function Preview({formData}) {

    const {personalDetails,contactDetails,education,professionalDetails,skills,summary}=formData
  return (
    <>
    <Box >
      <Paper  elevation={24} sx={{
        width:650,
        // height:750,
        padding:10
      }}>
       

       <Typography variant='h4' align='center' >{personalDetails.name!=''?personalDetails.name:'Name'}</Typography>
       <Typography variant='h4' align='center' >{personalDetails.title!=''?personalDetails.title:'job-title'}</Typography>
       <Typography variant='h6' align='center' >{contactDetails.phoneNumber!=''?contactDetails.phoneNumber:'Phone'}|{contactDetails.email!=''?contactDetails.email:'email'}|{personalDetails.location!=''?personalDetails.location:'location'}</Typography>
       <Typography variant='h6' align='center' ><a href={contactDetails.gitHub}>GitHub</a>|<a href={contactDetails.linkedin}>Linkedin</a>|<a href={contactDetails.portfolio}>Portfolio</a></Typography>

       <Divider className='mt-5'>Summary </Divider>
       <p>{formData.summary}</p>


       <Divider className='mt-3'>Education </Divider>

       <Typography variant='h5' align='center' >{education.course!=''?education.course:'Education Stream'} </Typography>
       <Typography variant='h6' align='center' >{education.collage!=''?education.collage:'collage'} |{education.university!=''?education.university:'university'} |{education.year!=''?education.year:'year'}</Typography>

       <Divider className='mt-3'>Professional Experience </Divider>

       <Typography variant='h5' align='center' >{professionalDetails.jobTitle!=''?professionalDetails.jobTitle:'work as'}</Typography>
       <Typography variant='h6' align='center' >{professionalDetails.company!=''?professionalDetails.company:'company'}|{professionalDetails.location!=''?professionalDetails.location:'location'}|{professionalDetails.duration!=''?professionalDetails.duration:'Duration'}</Typography>


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