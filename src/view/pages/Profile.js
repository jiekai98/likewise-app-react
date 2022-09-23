import { getAuth } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const handleLogout = () => {
      const auth=getAuth();
      auth.signOut().then((value)=>{
        console.log(value)
        console.log('what')
        navigate('/');
      },(reason)=>console.log(reason))
  }
  let navigate = useNavigate();
  return (
    <div>
      <h1>Profile</h1>

      <section>
      <br></br>
      <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" width={200} height={200}></img>

      </section>
      <br></br>

      <section>
       Username:
      <p style={{backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      nicholas
      </p></section>

      <section>
       Password:
      <p style={{backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      *********
      </p></section>

      <section>
       School Email:
      <p style={{backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      nich0063@e.ntu.edu.sg
      </p></section>

      <section>
       Gender:
      <p style={{backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      male
      </p></section>

      <section>
       Date of Birth:
      <p style={{backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      10/03/199
      </p></section>

      <section>
       Course of study:
      <p style={{backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      BCG
      </p></section>

      <section>
       Year of study:
      <p style={{backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      Year 3
      </p></section>

      <br></br>
      <div>
        <button onClick={()=>handleLogout()}>Logout</button>
      </div>
    </div>
  )
}

export default Profile