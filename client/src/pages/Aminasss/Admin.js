import React from 'react'
import {Link} from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <div className='row justify-content-center text-center m-3'>
      <h2 className='col-6'>Administratoriaus vartotojo sasaja</h2>
    </div>
    <div className=' row justify-content-center'>
      <Link to='/bookAdd' className=' col-3 btn btn-info m-3'>Nauja knyga</Link>
      <Link to='/bookControle' className='col-3 btn btn-warning m-3'>Knygu valdyma </Link>
    </div>
    
    </>
  )
}

export default Admin