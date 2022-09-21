import React from 'react'
import EventCard from '../components/EventCard'
import {query,collection,orderBy,onSnapshot} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';
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

  return (
    <div>
      <h1>
        EventRooms
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