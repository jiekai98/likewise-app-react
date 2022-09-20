import React, { useEffect, useState ,useRef} from 'react'
import { useNavigate } from 'react-router-dom'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { db } from '../../firebase-config';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { getAuth } from 'firebase/auth';

import {query,collection,orderBy,onSnapshot} from 'firebase/firestore';
import { Navigate } from 'react-router-dom';

import ChatMessage from '../components/ChatMessage';
import SendMessage from '../components/SendMessage'
import ChatRoomBar from '../components/ChatRoomBar';

import { Paper } from '@mui/material';

const ChatRoom = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const scroll = useRef()
  const messageScroll = useRef()
  const q = query(collection(db, 'messages'),orderBy('timestamp'))
  useEffect(()=>{
    const q = query(collection(db, 'messages'),orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
      let messages=[]
      QuerySnapshot.forEach((doc)=>{
        messages.push({...doc.data(),id:doc.id})
      })
      console.log(messages);
      setMessages(messages);
    })
  },[])

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <ChatRoomBar/>
      ChatRoom
      <div style={{width:'100%',display:'flex',flexDirection:'column',marginTop:'25px'}}>
        <Paper>
        <Paper style={{width:'100%',height: '500px', overflow: 'auto'}}>
      {messages.map(message => (
        <ChatMessage key={message.id} className='message' message={message} messageScroll={messageScroll}></ChatMessage>
      ))}
      <span ref={messageScroll}></span>
      </Paper>
      <SendMessage scroll={scroll} messageScroll={messageScroll}/>
      </Paper>
      <span ref={scroll}></span>
      </div>
    </div>
  )
}

export default ChatRoom