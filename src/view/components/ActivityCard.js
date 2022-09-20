import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const BasicCard = ({nameOfEvent,numOfEvents,goToEvent,imageOfEvent}) =>{

  //jiekai try
 
  let navigate=useNavigate();
  return (
    <Card sx={{display:'flex',flexDirection:'column',width:300, ':hover':{boxShadow:'10'}, marginTop:6, marginLeft:"2px"}}>

      <CardContent>
      <img style = {{width: 300, height:250, position: 'relative', px:0}} src = {imageOfEvent} alt = "" />
        <h1>{nameOfEvent}</h1>
        <h2>{numOfEvents}</h2>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate('/home/eventrooms')}>Go to</Button>
      </CardActions>
      </Card>
  );

  

  
}

export default BasicCard;