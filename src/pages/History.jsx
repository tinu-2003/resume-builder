import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header'
import { useEffect, useState } from 'react';
import { deleteHistoryAPI, viewHistoryAPI } from '../services/allAPIs';
import { Stack } from '@mui/material';

function History() {

const [historyData,setHistoryData]=useState([])

  const view =async()=>{
    try{
       const response = await viewHistoryAPI()
      //  console.log(response.data);
       
      setHistoryData(response.data)


    }
    catch(err){
      console.log(err);
      
    }



}
//  console.log(historyData);


useEffect(()=>{
  view()
},[])

 
const historydelete = async(key)=>{
// console.log(key);

try{
const response = await deleteHistoryAPI(key)
console.log(response);

view()

}
catch(err){
  console.log(err);
  
}



}

  return (
    <>
    <Header/>
    <Stack   direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}>
  
          {historyData.length > 0 ? historyData.map((item,index)=>(
            
 <Stack 

 direction='column'
 width='50%'
 key={index}>
  <div>
      <p className='text-center'>Dowload @ {item.formateData}</p>
          <Card style={{ width: '18rem' }} >
          
          <Card.Img variant="top" src={item.canvaToImg} />
          <Card.Body>
            <Button variant="primary" className='m-4'>View</Button>
            <Button variant="primary" className='m-4' onClick={()=>historydelete(item.id)} >Delete</Button>
          </Card.Body>
        </Card>
  </div>
 </Stack>
          )):'no history'}

    </Stack>
    
    </>
  )

}

export default History