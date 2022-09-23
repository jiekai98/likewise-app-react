import TextBox from "../components/common/TextBox";
import Button from "../components/common/Button";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Login = ({setEmail, setPassword, handleAction, handleReset}) => {
  
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
      justifyContent: 'center',
      paddingTop: 0
    }} >
      <Stack spacing={0}>
      <b style={{alignSelf:'center', fontSize:40}}>Login</b>
      <TextBox label="E-mail" onChange={setEmail}/>
      <TextBox label="Password" onChange={setPassword}/>
      <Button label="Confirm Login" style={{alignSelf:'center'}} handleAction={handleAction} />
      <Button label="Reset password" style={{alignSelf:'center'}} handleAction={handleReset} />     
      </Stack>
    </div>
  )
}

export default Login