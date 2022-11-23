import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import MainContext from './components/MainCintext/MainContext';
import Alert from './components/Alert/Alert';
import Admin from './pages/Aminasss/Admin';
import ForUsers from './pages/ForUsers/ForUsers';
import BookAdd from './pages/BookAdd/BookAdd';
import BookContrl from './pages/BookAdd/BookContrl'
import axios from 'axios'

function App() {


  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  // const [search, setSearch] = useState('')
  const [alert, setAlert] = useState({
    message:'',
    status: ''
  })

  const contextValues = {loggedIn, setLoggedIn, userInfo, setUserInfo,alert,setAlert}


  useEffect(() => {

    axios.get('/api/users/check-auth')
    .then(resp => {
      console.log(resp.data.role);
      setUserInfo(resp.data.role)
    })
    .catch(error => {
      console.log(error);
    })

  },[])



  return (
   <BrowserRouter>
    <MainContext.Provider value = {contextValues}>
   <div className='container'>
    <Alert/>
      <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/bookAdd' element={<BookAdd/>}/>
      <Route path='/bookControle' element={<BookContrl/>}/>


          
          { userInfo === 0 && (
          <>
           <Route path='/forUsers' element={<ForUsers/>}/>
          </>
        )
        }
     

        { userInfo === 1 && (
          <>
            <Route path='/admin' element={<Admin/>}/>
          </>
        )
        }
     
        
      </Routes>
    </div>
    </MainContext.Provider>
   </BrowserRouter>
  );
}

export default App;
