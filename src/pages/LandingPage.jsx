import { Button } from '@mui/material'
import Header from '../components/Header'
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdEmail } from "react-icons/md";
import { FaMobileButton } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
function LandingPage() {
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

  return (

  <>
      <Header/>
      {/* image  */}
      <section id='img-landing'>
       
 {/* box  */}
<section id='content'>
    <div 
      className="shadow border py-5 px-4 rounded text-center"
      style={{ backgroundColor: "rgba(225, 225, 225, 0.72)",marginTop:"250px", width:'500px', height:'200px'}}
    >
      <h4>Designed to get hired</h4>
      <h6>Your skills, your story, your next job — all in one.</h6>
     <Link to={'/resumegeneratorpage'}>
     
        <button className="btn btn-primary">Make your resume</button>
     
     </Link>
     
    </div>
</section>

      </section>
{/* tools */}
      <div>
       
          <Grid display="flex" justifyContent="center" alignItems="center" margin="50px">
     <h1 >Tools</h1>
  </Grid>

   <Container>
      <Row>
        <Col ><h5>Resume</h5>
        <p>create unlimited new Resume and easily edit them afterwards</p>
        <h5>Cover Letters</h5>
        <p>Easily write professional cover letters</p>
        
        <h5>Jobs</h5>
        <p>Automatically receive new and relavent job posting</p>
        <h5>Application</h5>
        <p>Effortlessly manage and track your job Application
          in an organized manner
        </p>
        </Col>
        <Col><img src="https://cdn.pixabay.com/photo/2018/10/05/17/34/cv-3726428_1280.jpg" width={'100%'}  alt="tool-image" />
        </Col>
      </Row>
    </Container>
  
      </div>

{/* image */}
      <div className='mt-5' id='img-landing2'>
         <img src="" alt="" width={'100%'}  />
      </div>

      {/* testimony */}

      <div className='m-5'>

         <Grid display="flex" justifyContent="center" alignItems="center" margin="50px">
     <h1 >Testimony</h1>
  </Grid>
         <Container>
      <Row>
        <Col ><h5>Trused by professionals worldwide.</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, et rem cumque voluptate nostrum nesciunt dignissimos in provident excepturi est sint maiores, quae aperiam dolore perferendis. Officia rem error provident.
      Nemo ab veritatis amet magni ex dolor a aperiam neque cupiditate eius. Distinctio provident, magnam fugiat, quos quis ipsa repellendus vero adipisci cupiditate quod similique voluptas odit necessitatibus a cum.
      Similique fugiat corrupti quia distinctio excepturi facere amet harum, fugit totam dolorem, odit quisquam? Magni saepe doloremque ratione, atque nesciunt magnam deserunt, sint voluptates, tempore id facilis soluta dolores aperiam?</p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim nam, distinctio excepturi earum harum corporis reprehenderit assumenda veritatis architecto nihil odio vel hic ratione nemo voluptas quia? Placeat, sed?
      Labore, architecto ducimus reiciendis incidunt aspernatur cumque voluptatem ipsum! Doloribus veritatis earum repudiandae fugiat mollitia illum adipisci? Mollitia, libero optio ex aperiam voluptatem voluptatibus velit atque consequuntur vero sapiente enim!</p>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nostrum quae corrupti aliquam itaque quibusdam reiciendis veniam voluptatibus dolore. Reiciendis cum mollitia asperiores. Consequatur fugit, repudiandae minima quasi voluptatibus dolor.</p>
        </Col>
    <Col>
      <Row>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'}/></Col>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'}/></Col>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'}/></Col>
          
      </Row>
         <Row>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'}/></Col>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'}/></Col>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'}/></Col>
          
         </Row><Row>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'} /></Col>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'}/></Col>
            <Col><img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="user"  width={'100%'}/></Col>
          
         </Row>
  
    </Col>

      </Row>
    </Container>

      </div>

      {/* footer */}

      <div className='bg-primary  text-light p-3'>

         <Grid display="flex" flexDirection={'column'} justifyContent="center" alignItems="center" margin="50px">
   <h3>Contact Us </h3>
   <p><MdEmail /> resumebuilder@gmail.com</p>
   <p><FaMobileButton /> 8085477349</p>

      <h4>Conect with us</h4>
      <Grid display={'flex'}>
<FaInstagram /><FaFacebook /><FaWhatsapp /><FaLinkedin />
      </Grid>

      <p>Designed & build with 💖 using react</p>
  </Grid>
                    

      </div>
  </>
  )
}

export default LandingPage