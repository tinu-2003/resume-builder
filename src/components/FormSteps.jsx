import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from 'react-bootstrap';

const steps = [
  'Basic Information',
  'Contact Details',
  'Education Deatails',
  'Work Experience',
  'Skills',
  'Summary'
];
function FormSteps() {

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
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
         </Stack>
    </Box>
        )

         case 1:return(
            <Box>

        <h3>Contact Details</h3>
         <Stack>
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
         </Stack>
    </Box>
        )
         case 2:return(
           <Box>

        <h3>Educational Details</h3>
         <Stack>
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
         </Stack>
    </Box>
        )

         case 3:return(
            <Box>

        <h3>Professional Details</h3>
         <Stack>
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
              <TextField label="Standard" variant="standard" />
         </Stack>
    </Box>
        )
         case 4:return(
          <Box>

        <h3>Skills</h3>
         <Stack>
              <TextField label="Standard" variant="standard" />

             <div className='mt-4'>
                 <p>Suggestion: </p>
                <div >
                
             <Button variant='outlined' className='m-2'>react</Button>
             <Button variant='outlined' className='m-2'>react</Button>
             <Button variant='outlined' className='m-2'>react</Button>
             <Button variant='outlined' className='m-2'>react</Button>
           

                     
                </div>
               
                 </div>
            
           <div className='mt-4'>  
             <p>Added Skills</p>
             <Button variant='contained' className='m-2'>react</Button>
             <Button variant='contained' className='m-2'>react</Button>
             <Button variant='contained' className='m-2'>react</Button>
             </div>
         </Stack>
    </Box>
        )

         case 5:return(
          <Box>

        <h3>Professional Summary</h3>
         <Stack>
          
              <TextField label="Summary" multiline rows={4} defaultValue="Lorem ipsumblanditiis est, deleniti fugit excepturi harum repudiandae sit delectus?" variant="standard" />
              
         </Stack>
    </Box>
        )

        default:
            return(
                'null'
            )
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
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box></div>
  )
}

export default FormSteps