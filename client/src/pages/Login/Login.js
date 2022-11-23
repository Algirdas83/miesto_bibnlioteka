import React from 'react'
import { useState, useContext } from 'react'
import MainContext from '../../components/MainCintext/MainContext'
import { Link , useNavigate} from "react-router-dom"
import axios from 'axios'

const Login = () => {

    const [form, setForm] = useState({

        email:'',
        password: ''
    })

    const navigate = useNavigate()

  const {setAlert} = useContext(MainContext)

  ///////////ONCHANGE
  const handleOnchange = (e) => {

    setForm({...form, [e.target.name]: e.target.value})
    console.log(form);
}
///////////////
////// HANDLE SUBMIT
const handleSubmit = (e) => {
e.preventDefault()
axios.post('/api/users/login',form )
.then(resp => {
    console.log(resp);
    setAlert({
        message: resp.data.message,
        status: 'success'
    })
    setTimeout(() => {
        if(resp.data.user.role === 1){navigate('/admin')}
        if(resp.data.user.role === 0){ navigate('/forUsers') }
        
    },1600)
    
})
.catch(error => {
    console.log(error);
    setAlert({
        message: error.response.data,
        status: 'danger'
    })
})

}









  return (
    <>
   <div className='row d-flex flex-column align-items-center  '>
    <h2 className=' col-4 text-center mt-2'>Knygu registracija</h2>
        <form className="login-from col-4 mt-2" onSubmit={handleSubmit} >
               
               <div className='row mt-2'>
               <input className='col ' type="email" name="email" placeholder='El pastas'  onChange={handleOnchange}  /></div>  
               <div className='row mt-2'>
               <input className=' col ' type="password" name="password" placeholder='Slaptazodis' onChange={handleOnchange}  />
                </div>   
               <div className='row justify-content-center mt-2'>
               <button className = " col-4  btn btn-primary"> Prisijungti</button>
               </div>    
               <div className='row justify-content-center mt-2'>
               <Link to='/register' className = " col-4  text-center"> Registruotis</Link>
               </div>    
           

           
              
            

        </form>

   </div>
    
    
    </>
  )
}

export default Login