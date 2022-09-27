import React, { useState } from 'react'
import ActivityCard from '../components/ActivityCard'
import {query,collection,orderBy,onSnapshot} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useEffect } from 'react';

const ActivityRooms = ({setEventRoom}) => {

  const [aRooms,setARooms]=useState([]);

  useEffect(()=>{
    const q = query(collection(db, 'aRooms'),orderBy('cap','desc'))
    let t
  },[])

  
  return (
    <div >      
      <h1 style={{marginLeft:"12px", marginTop:"12px"}}>ActivityRooms</h1>
    <div className="container-fluid d-flex justify-content-center" style={{minWidth:1000,color:'orange',bgcolor:'orange'}}>
      <div className="row">
        {aRooms.map(activityObject=>(
          <div key={activityObject.id} className="col-md-auto">
          <ActivityCard key={activityObject.id} nameOfEvent= {activityObject.id} 
            imageOfEvent = {activityObject.imageUrl} setEventRoom={setEventRoom} timer={activityObject.timer}/>
          </div>
        ))}
      </div>
    </div>
    </div>

  
    
  )
}

export default ActivityRooms