import React from 'react'
import { inputAdornmentClasses, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { async } from '@firebase/util';
import {auth,db} from '../../firebase-config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import IconButton from '@mui/material/IconButton';

const SendMessage = ({scroll, messageScroll}) => {
    const [value, setValue] = useState('');

    const sendMessage = async(e)=>{
        e.preventDefault()
        const {uid,email} = auth.currentUser
        if (value!=''){
        await addDoc(collection(db,'messages'),{
            text: value,
            name: email,
            uid,
            timestamp: serverTimestamp()
        })
        setValue('')
        scroll.current.scrollIntoView({behavior:'smooth'})
        messageScroll.current.scrollIntoView({behavior:'smooth'})
    }
    }

  return (
    <form onSubmit={sendMessage} style={{width:'100%',top:'10%'}}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'row',mx:'100px'}}>
    <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={2}
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          margin="normal"
          sx={{width:'400px',position:'relative',right:'10px',left:'10px'}}
          onKeyDown
        />
      <IconButton
            size="large"
            type='submit'
            sx={{
              position:'relative',top:'20px',height:'45px',left:'20px',right:'20px',backgroundColor:'orange',
            ':hover':{backgroundColor:'primary.dark'}}}
          >
            <SendIcon sx={{fill:'white'}}/>
          </IconButton>
          </div>
          </div>
    </form>
  )
  
}

export default SendMessage