import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';


const BasicCard = ({nameOfEvent,thePath,setChatRoom}) =>{
  
  const navigate=useNavigate();

  return (
    <Card sx={{ minWidth: 50 }}>
      <CardContent>
        <h1>{nameOfEvent}</h1>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{setChatRoom(thePath);navigate('/home/chatroom')}}>Go to</Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;