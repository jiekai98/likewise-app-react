import React from 'react'
import EventCard from '../components/EventCard'
import {query,collection,orderBy,onSnapshot,doc,setDoc,addDoc, serverTimestamp} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
const EventRooms = ({eventRoom,setChatRoom}) => {
  const [eRooms,setERooms]=useState([]);

  useEffect(()=>{
    if (eventRoom===''){
      console.log('Wait for event room state update')
    }
    else{
    const q = query(collection(db, 'aRooms/'+eventRoom+'/eRooms'),orderBy('cap','desc'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
      let eRooms=[]
      QuerySnapshot.forEach((doc)=>{
        eRooms.push({...doc.data(),id:doc.id})
      })
      console.log(eRooms);
      setERooms(eRooms);
    })
  }},[eventRoom])

  const createChatRoom=async({name='testRoom',cap=10,location='Singapore',pax=1,time=serverTimestamp()})=>{

    //https://firebase.google.com/docs/firestore/manage-data/add-data
    const docRef = await addDoc(collection(db, 'aRooms/'+eventRoom+'/eRooms'), {
      name: name,
      cap: cap,
      pax: pax,
      rem: cap-pax,
      location:location,
      time:time
    });

  }

  return (
    <div>
      <h1>
        EventRooms
        <Button sx={{minWidth:'100px',minHeight:'100px'}} onClick={createChatRoom}>Hello</Button>
        {eRooms.map(eventObject=>(
          <div key={eventObject.id} className="col-md-auto">
          <EventCard key={eventObject.id} setChatRoom={setChatRoom} nameOfEvent={eventObject.name} chatRoomId={eventObject.id} thePath={'/aRooms/'+eventRoom+'/eRooms/'+eventObject.id+'/messages'} />
          </div>
        ))}
      </h1>
    </div>
  )
}

export default EventRooms