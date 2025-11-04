import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import { Stack } from 'react-bootstrap';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { addHistoryAPI } from '../services/allAPIs';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


function Preview({formData}) {

  const {personalDetails,contactDetails,education,professionalDetails,skills,summary}=formData
   
    const handleDownload= async()=>{
    // console.log('clicked dowload button');
    // console.log(document.getElementById('result'));
// get the div section by id and make it a canvas
    const canvas = await html2canvas(document.getElementById('result'),{scale:3})
    // conver cancvas to  image converter
    const canvaToImg= canvas.toDataURL('image/png')
    console.log(canvaToImg);
    // image to pdf

    const pdf = new jsPDF('p','mm','a4')

    // dif hi=eight and width

    const pdfWidth =pdf.internal.pageSize.getWidth();
    const pdfHeight =(canvas.height * pdfWidth)/canvas.width

    // for image to pdf convertion

    pdf.addImage(canvaToImg,'PNG',0,0,pdfWidth,pdfHeight);

    // save namem or format

    pdf.save('resume.pdf')

    // add to history db

    const time =new Date()
    console.log(time);

    // formate date and time
    const formateData = `${time.toLocaleDateString()} ,${time.toLocaleTimeString()}`
    console.log(formateData);
    
    
try{
 const  response = await addHistoryAPI({...formData,formateData,canvaToImg})
    console.log(response);

    if(response.status ===201){
    
    Swal.fire({
      title: 'Downloaded',
      text: ' Succesful ',
      icon: 'success',
      confirmButtonText: 'Okay'
    })
    }

}

catch(err){
  console.log(err);
  
}

   





    
    
  }
  return (
    <>

    <Box >
      
         <Stack
          direction='horizontal'
          spacing={3}
          justifyContent='center'
          alignItems='center'
        
          // margin={2}
         >
            <button className='btn btn-light' onClick={handleDownload}><FaArrowCircleDown /></button>
     
            <button className='btn btn-light' ><FaEdit /></button>
          <Link to='/history'>  <button className='btn btn-light '> <FaHistory /></button></Link>

        </Stack>
      <Paper id='result'  elevation={24} sx={{
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


         {
          skills.map(item=>(
         <Button variant='contained' className='m-3'>{item}</Button>

          ))
         }
        
       



       

      </Paper>
    </Box>
    
    </>
  )
}

export default Preview