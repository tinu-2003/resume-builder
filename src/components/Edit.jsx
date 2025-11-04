import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>


      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <TextField label="Full Name" variant="standard" onChange={(e) => setFormData({ ...formData, personalDetails: { ...formData.personalDetails, name: e.target.value } })} value={personalDetails.name} />
              <TextField label="Job Title" variant="standard" onChange={(e) => setFormData({ ...formData, personalDetails: { ...formData.personalDetails, title: e.target.value } })} value={personalDetails.title} />
              <TextField label="Location" variant="standard" onChange={(e) => setFormData({ ...formData, personalDetails: { ...formData.personalDetails, location: e.target.value } })} value={personalDetails.location} />


              <TextField label="Email" variant="standard" onChange={(e) => setFormData({ ...formData, contactDetails: { ...formData.contactDetails, email: e.target.value } })} value={contactDetails.email} />
              <TextField label="Phone Number" variant="standard" onChange={(e) => setFormData({ ...formData, contactDetails: { ...formData.contactDetails, phoneNumber: e.target.value } })} value={contactDetails.phoneNumber} />
              <TextField label="GitHub Profile Link" variant="standard" onChange={(e) => setFormData({ ...formData, contactDetails: { ...formData.contactDetails, gitHub: e.target.value } })} value={contactDetails.gitHub} />
              <TextField label="Linkedin Profile Link" variant="standard" onChange={(e) => setFormData({ ...formData, contactDetails: { ...formData.contactDetails, linkedin: e.target.value } })} value={contactDetails.linkedin} />
              <TextField label="Protfolio Link" variant="standard" onChange={(e) => setFormData({ ...formData, contactDetails: { ...formData.contactDetails, portfolio: e.target.value } })} value={contactDetails.portfolio} />

              <TextField label="Course Name" variant="standard" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, course: e.target.value } })} value={education.course} />
              <TextField label="Colllage Name" variant="standard" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, collage: e.target.value } })} value={education.collage} />
              <TextField label="University" variant="standard" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, university: e.target.value } })} value={education.university} />
              <TextField label="Year of PassOut" variant="standard" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, year: e.target.value } })} value={education.year} />


              <TextField label="Job Or  Internship" variant="standard" onChange={(e) => setFormData({ ...formData, professionalDetails: { ...formData.professionalDetails, jobTitle: e.target.value } })} value={professionalDetails.jobTitle} />
              <TextField label="Compay Name" variant="standard" onChange={(e) => setFormData({ ...formData, professionalDetails: { ...formData.professionalDetails, company: e.target.value } })} value={professionalDetails.company} />
              <TextField label="Location" variant="standard" onChange={(e) => setFormData({ ...formData, professionalDetails: { ...formData.professionalDetails, location: e.target.value } })} value={professionalDetails.location} />
              <TextField label="Duration" variant="standard" onChange={(e) => setFormData({ ...formData, professionalDetails: { ...formData.professionalDetails, duration: e.target.value } })} value={professionalDetails.duration} />

              <TextField label="Add Skills" variant="standard" onChange={(e) => setInputSkill(e.target.value)} />


            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default Edit