import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from 'react-bootstrap';
import { ImCross } from "react-icons/im";
import { addResumeAPI } from '../services/allAPIs';
import Swal from 'sweetalert2'

const steps = [
  'Basic Information',
  'Contact Details',
  'Education Deatails',
  'Work Experience',
  'Skills',
  'Summary'
];
function FormSteps({formData,setFormData,setDataStatus}) {
console.log(setDataStatus);


  const {personalDetails,contactDetails,education,professionalDetails,skills,summary}=formData
  console.log(formData);
  // console.log(formData.personalDetails);
  
  // to add skills

  const [inputSkill,setInputSkill]= useState('')
  // console.log(inputSkill);


  // suggestions array

  const suggestions =['React' ,'Angular','Node JS','Express','MongoDb']
  

      const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };



  const renderStepContent=(step)=>{
    switch(step){
        case 0:return(
    <Box>

        <h3>Personal Details</h3>
         <Stack>
              <TextField label="Full Name" variant="standard" onChange={(e)=>setFormData({...formData,personalDetails:{...formData.personalDetails,name:e.target.value}})}  value={personalDetails.name}/>
              <TextField label="Job Title" variant="standard" onChange={(e)=>setFormData({...formData,personalDetails:{...formData.personalDetails,title:e.target.value}})}  value={personalDetails.title}/>
              <TextField label="Location" variant="standard" onChange={(e)=>setFormData({...formData,personalDetails:{...formData.personalDetails,location:e.target.value}})}  value={personalDetails.location}/>
         </Stack>
    </Box>
        )

         case 1:return(
            <Box>

        <h3>Contact Details</h3>
         <Stack>
              <TextField label="Email" variant="standard" onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,email:e.target.value}})} value={contactDetails.email} />
              <TextField label="Phone Number" variant="standard" onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,phoneNumber:e.target.value}})} value={contactDetails.phoneNumber}  />
              <TextField label="GitHub Profile Link" variant="standard" onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,gitHub:e.target.value}})} value={contactDetails.gitHub} />
              <TextField label="Linkedin Profile Link" variant="standard" onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,linkedin:e.target.value}})} value={contactDetails.linkedin} />
              <TextField label="Protfolio Link" variant="standard" onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,portfolio:e.target.value}})} value={contactDetails.portfolio} />
         </Stack>
    </Box>
        )
         case 2:return(
           <Box>

        <h3>Educational Details</h3>
         <Stack>
              <TextField label="Course Name" variant="standard" onChange={(e)=>setFormData({...formData,education:{...formData.education,course:e.target.value}})} value={education.course} />
              <TextField label="Colllage Name" variant="standard" onChange={(e)=>setFormData({...formData,education:{...formData.education,collage:e.target.value}})} value={education.collage}  />
              <TextField label="University" variant="standard" onChange={(e)=>setFormData({...formData,education:{...formData.education,university:e.target.value}})} value={education.university} />
              <TextField label="Year of PassOut" variant="standard" onChange={(e)=>setFormData({...formData,education:{...formData.education,year:e.target.value}})} value={education.year} />
         </Stack>
    </Box>
        )

         case 3:return(
            <Box>

        <h3>Professional Details</h3>
         <Stack>
              <TextField label="Job Or  Internship" variant="standard" onChange={(e)=>setFormData({...formData,professionalDetails:{...formData.professionalDetails,jobTitle:e.target.value}})} value={professionalDetails.jobTitle} />
              <TextField label="Compay Name" variant="standard" onChange={(e)=>setFormData({...formData,professionalDetails:{...formData.professionalDetails,company:e.target.value}})} value={professionalDetails.company}/>
              <TextField label="Location" variant="standard"  onChange={(e)=>setFormData({...formData,professionalDetails:{...formData.professionalDetails,location:e.target.value}})} value={professionalDetails.location}/>
              <TextField label="Duration" variant="standard"  onChange={(e)=>setFormData({...formData,professionalDetails:{...formData.professionalDetails,duration:e.target.value}})} value={professionalDetails.duration}/>
         </Stack>
    </Box>
        )
         case 4:return(
          <Box>

        <h3>Skills</h3>
         <Stack>
              <TextField label="Add Skills" variant="standard" onChange={(e)=>setInputSkill(e.target.value)}  />

                <Button variant='contained' className='m-5' onClick={()=>addSkill(inputSkill)}>Add Skill </Button>

             <div className='mt-4'>
                 <p>Suggestion: </p>
                <div >
                  {
              suggestions.map(item=>(
             <Button variant='outlined' className='m-2' onClick={()=>addSkill(item)}>{item}</Button>

              ))
             }
           
           

                     
                </div>
               
                 </div>
            
           <div className='mt-4'>  
             <p>Added Skills</p>
             {
              skills.map(item=>(
             <Button variant='contained' className='m-2'>{item}
              <span className=' text-danger p-2' onClick={()=>removeSkills(item)}><ImCross /></span></Button>

              ))
             }

             </div>
         </Stack>
    </Box>
        )

         case 5:return(
          <Box>

        <h3>Professional Summary</h3>
         <Stack>
          
              <TextField label="Write a short Summary of Yourself" multiline rows={4} defaultValue="Lorem ipsumblanditiis est, deleniti fugit excepturi harum repudiandae sit delectus?" variant="standard" onChange={(e)=>setFormData({...formData,summary:e.target.value})}/>
              
         </Stack>
    </Box>
        )

        default:
            return(
                'null'
            )
    }
  }

// skill add function


const addSkill=(skill)=>{
  // console.log(skill);
  if(skills.includes(skill)){
  

    Swal.fire({
  title: "warning?",
  text: "skill already existing....?",
  icon: "warning"
});
  }  
  else{
    setFormData(data=>({...data,skills:[...data.skills,skill]}))
  }
}

const removeSkills=(skill)=>{
  setFormData(data=>({...data,skills:skills.filter(item=>item!=skill)}))
}

const handleAddResume=async()=>{
  try{
const  response = await addResumeAPI(formData)
console.log(response);


if(response.status ===201){

setDataStatus(true)
Swal.fire({
  title: 'Submitted',
  text: ' Succesful Added',
  icon: 'success',
  confirmButtonText: 'Okay'
})
}

 
  }

  catch(err){
        
    Swal.fire({
  title: 'error',
  text: ' ',
  icon: 'error',
  confirmButtonText: 'Okay'
})
  }
 


}

  return (
    <div>     <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

          <Box>
            {
                renderStepContent(activeStep)
            }
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            < >
              {activeStep === steps.length - 1 ? 
              
              (
                <Button onClick={handleAddResume}>Finish</Button>
              ): (
                <Button onClick={handleNext}>Next</Button>
              )
              
              
              
              }
            </>
          </Box>
        </React.Fragment>
      )}
    </Box></div>
  )
}

export default FormSteps