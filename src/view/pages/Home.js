import { onAuthStateChanged,getAuth } from "firebase/auth";
import { useEffect } from "react";
import {
    Outlet,
    useNavigate
  } from "react-router-dom";
  
import SideBar from '../components/SideBar'

  

  const Home = () =>{
    let navigate=useNavigate();

  
  useEffect(()=>{
    const auth=getAuth();
    const user=auth.currentUser;
    if (!user || !user.emailVerified){navigate('/')}
    },[])
    return(
      <div className="home">
        <SideBar />
        <div className="content">
          <Outlet/>
        </div>
      </div>
    );
  }
  
  export default Home;