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

const ChatRoom = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const scroll = useRef()
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
    <div>
      ChatRoom
        <button onClick={()=>{navigate('/home/myrooms')}}>Back</button>
      <div>
      {messages.map(message => (
        <ChatMessage key={message.id} className='message' message={message.text}>{message.text}</ChatMessage>
      ))}
      </div>
    </div>
  )
}

export default ChatRoom