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
      <div>
        <button onClick={()=>handleLogout()}>Logout</button>
      </div>
    </div>
  )
}

export default Profile