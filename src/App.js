//firebase API
import fireBase from './firebase-config'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import 'firebase/auth'

//Routing libs
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";

//Page components
import Login from "./view/pages/Login";
import Register from "./view/pages/Register";
import Home from "./view/pages/Home";
import Onboard from './view/pages/Onboard';

import EventRooms from "./view/pages/EventRooms";
import ChatRoom from './view/pages/ChatRoom';

import MyRooms from "./view/pages/MyRooms";
import ActivityRooms from "./view/pages/ActivityRooms";
import Profile from "./view/pages/Profile";

//Hooks
import { useEffect, useState } from 'react';

//Toast
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import userEvent from '@testing-library/user-event';
import { Outlet ,Navigate} from 'react-router-dom';


const App = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser]=useState(null);
  const [eventRoom,setEventRoom]=useState('');
  const [chatRoom,setChatRoom]=useState('');

  let navigate=useNavigate();

  
  const handleLogin = () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          const user=auth.currentUser;
          console.log(user.emailVerified);
          if (user.emailVerified){
            console.log(auth.currentUser);
            setUser(user);
            navigate('/Home/ActivityRooms');
          }
          else{
            toast.error("Please verify your Email");
          }
        }).catch((error) => {
          console.log(error)
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please register for an account');
          }
          if(error.code === 'auth/invalid-email'){
            toast.error('Please check the Email');
          }
          if (error.code ==='auth/internal-error'){
            toast.error('Please enter both Email and Password');
          }
        })
  }
  const handleRegister = () => {
    const auth = getAuth();
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((response)=>
    {console.log(response);
      sendEmailVerification(auth.currentUser).then((value)=>{
        toast('Email sent');
        console.log(auth.currentUser.email);
      })
  toast('Please verify your Email address');}).catch((error) => {
      console.log(error)
      if(error.code === 'auth/wrong-password'){
        toast.error('Please check the Password');
      }
      if(error.code === 'auth/invalid-email'){
        toast.error('Please check the Email');
      }
      if (error.code ==='auth/internal-error'){
        toast.error('Please enter both Email and Password');
      }
      if (error.code ==='auth/email-already-in-use'){
        toast.error('Email already in use. Please try to login.');
      }
    })
  }

  return(
      <div className="App">
        <ToastContainer/>
        <Routes>
            <Route path='/' element={<Onboard />}>
              <Route path="Login" element={<Login setEmail={setEmail} setPassword={setPassword} handleAction={handleLogin}/>}/>
              <Route path="Register" element={<Register setEmail={setEmail} setPassword={setPassword} handleAction={handleRegister}/>}/>
            </Route>
            <Route element={<ProtectedRoute user={user}/>}>
              <Route path="/Home" element={<Home />}>
                <Route path="ActivityRooms" element={<ActivityRooms setEventRoom={setEventRoom}/>}/>
                <Route path="EventRooms" element={<EventRooms setChatRoom={setChatRoom} eventRoom={eventRoom} chatRoom={chatRoom}/>}/>
                <Route path="MyRooms" element={<MyRooms />}/>
                <Route path="Profile" element={<Profile />}/>
                <Route path="ChatRoom" element={<ChatRoom chatRoom={chatRoom}/>}/>
              </Route>
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
  );
}

const ProtectedRoute=({children, user})=>{
  if (!user || !user.emailVerified){
    console.log('What')
    return <Navigate to={'/'} replace />;
  }
  else{
    return (children)?children:<Outlet/>;
  }
}

export default App;
