import React from 'react'
import ActivityCard from '../components/ActivityCard'

const ActivityRooms = () => {

  const activityObject1 = { name:"Tennis", image:"/Images/tennis.jpg"};
  const activityObject2 = { name:"Badminton", image:"/Images/badminton.jpg"};
  const activityObject3 = { name:"Running", image:"/Images/running.jpg"};
  const activityObject4 = { name:"Swimming", image:"/Images/swimming.jpg"};
  const activityObject5 = { name:"Cycling", image:"/Images/cycling.jpg"};
  const activityList = [activityObject1,activityObject2,activityObject3,activityObject4,activityObject5];

  
  return (
   
    // <div>
    //     <h1>ActivityRooms</h1>
    //     <div style={{ display: "flex", flexWrap: "wrap" }}>
    //     {activityList.map(activityObject=>(
    //       <ActivityCard nameOfEvent= {activityObject.name} 
    //       imageOfEvent = {activityObject.image}/>
    //     ))}
        
        
        
    //     </div>
    // </div>
    <div >      
      <h1 style={{marginLeft:"12px", marginTop:"12px"}}>ActivityRooms</h1>
    <div className="container-fluid d-flex justify-content-center" style={{minWidth:1000,color:'orange',bgcolor:'orange'}}>
      <div className="row">
        {activityList.map(activityObject=>(
          <div className="col-md-auto">
          <ActivityCard nameOfEvent= {activityObject.name} 
            imageOfEvent = {activityObject.image}/>
          </div>
        ))}
      </div>
    </div>
    </div>

  
    
  )
}

export default ActivityRooms