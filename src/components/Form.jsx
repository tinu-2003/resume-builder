import React from 'react'
import Header from './Header'
import Footer from './Footer'
import FormSteps from './FormSteps'
import { Stack } from '@mui/material'
import Preview from './Preview'

function Form() {
  return (
<>
  
      <Header/>
  
<Stack
direction="row"
spacing={2}
sx={{justifyContent:"space-evenly",
  alignItems:"center",
  marginTop:"20px"
}}>
  
        <div>
          <FormSteps/>
        </div>
        <div>
          <Preview/>
        </div>
</Stack>



      <Footer/>
</>
  )
}

export default Form