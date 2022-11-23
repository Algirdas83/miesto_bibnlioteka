import React from 'react'
import { useState, useContext } from 'react'
import MainContext from '../../components/MainCintext/MainContext'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [form, setForm] = useState({
        name:'',
        last_name:'',
        email:'',
        password: ''
    })

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
    axios.post('/api/users/register',form )
    .then(resp => {
        
        setAlert({
            message: resp.data,
            status: 'success'
        })
    })
    .catch(error => {
        console.log(error);
        setAlert({
            message: error.response.data,
            status: 'danger'
        })
    })

}

//////////
  return (
    <>
    <div className='row d-flex flex-column align-items-center  '>
    <h2 className=' col-4 text-center mt-2'>Knygu registracija</h2>
        <form className="login-from col-4 mt-2" onSubmit={handleSubmit} >
               
               <div className='row mt-2'>
               <input className='col ' type="text" name="name" placeholder='Vardas' onChange={handleOnchange}  />
               </div>  
               <div className='row mt-2'>
               <input className='col ' type="text" name="last_name" placeholder='Pavarde' onChange={handleOnchange}  />
               </div>  
               <div className='row mt-2'>
               <input className='col ' type="email" name="email" placeholder='El pastas' onChange={handleOnchange}  />
               </div>  
               <div className='row mt-2'>
               <input className=' col ' type="password" name="password" placeholder='Slaptazodis' onChange={handleOnchange}  />
                </div>   
               <div className='row justify-content-center mt-2'>
               <button className = " col-4  btn btn-primary"> Registruotis</button>
               </div>    
               <div className='row justify-content-center mt-2'>
               <Link to='/' className = " col-4  text-center"> Prisijungti</Link>
               </div>    
           

           
              
            

        </form>

   </div>
    
    
    
    
    
    </>
  )
}

export default Register