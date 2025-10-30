import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import FormSteps from './FormSteps'
import { Stack } from '@mui/material'
import Preview from './Preview'

function Form() {

  const [formData,setFormData]=useState({
    personalDetails:{
      name:'',
      title:'',
      location:''
    },

    contactDetails:{
       email:'',
       phoneNumber:'',
       gitHub:'',
       linkedin:'',
       portfolio:''     
    },
  education:{
    course:'',
    collage:'',
    university:'',
    year:''
  },
  professionalDetails:{
    jobTitle:'',
    company:'',
    location:'',
    duration:''
  },
  skills:[],
  summary:''

  })
  return (
    <>

      <Header />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px"
        }}>

        <div >
          <FormSteps formData={formData} setFormData={setFormData} />
        </div>
        <div>
          <Preview formData={formData}  />
        </div>
      </Stack>



      <Footer />
    </>
  )
}

export default Form