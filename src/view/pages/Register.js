import TextBox from "../components/common/TextBox";
import Button from "../components/common/Button";
import Stack from '@mui/material/Stack';
import { useEffect } from "react";

const Register = ({setEmail, setPassword, handleAction}) => {
  //Runs once after render
  useEffect(()=>{
    setEmail('');
    setPassword('');
  },[])

  return (
    <div style={{
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <Stack spacing={0}>
      <b style={{alignSelf:'center', fontSize:40}}>Register</b>
      <TextBox label="E-mail" onChange={setEmail}/>
      <TextBox label="Password" onChange={setPassword}/>
      <Button label="Confirm Register" style={{alignSelf:'center'}} handleAction={handleAction} />
      </Stack>
    </div>
  )
}

export default Register