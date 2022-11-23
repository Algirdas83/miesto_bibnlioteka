import {Link} from 'react-router-dom'

const BookAdd = () => {
  return (
    <>
   <div className='row d-flex flex-column align-items-center  '>
    <h2 className=' col-4 text-center mt-2'>Prideti knyga</h2>
        <form className="login-from col-4 mt-2" >
               
               <div className='row mt-2'>
               <input className='col ' type="text" name="bookTitle" placeholder='Pavadinimas'   />
               </div>  
               <div className='row mt-2'>
               <input className=' col ' type="text" name="author" placeholder='Autorius'   />
                </div>   
                <div className='row mt-2'>
               <input className=' col ' type="text" name="coverAuthor" placeholder='Virselio dailynykas'   />
                </div> 
                <div className='row mt-2'>
               <input className=' col ' type="text" name="pages" placeholder='Pulapiu knygoje'   />
                </div> 
               <div className='row justify-content-center mt-2'>
               <button className = " col-4  btn btn-primary"> Prisijungti</button>
               </div>    
               {/* <div className='row justify-content-center mt-2'>
               <Link to='/register' className = " col-4  text-center"> Registruotis</Link>
               </div>     */}
           

           
              
            

        </form>

   </div>
    
    
    </>
  )
}

export default BookAdd