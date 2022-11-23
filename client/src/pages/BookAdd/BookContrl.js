import {Link} from 'react-router-dom'

const BookContrl = () => {
  return (
   <>
   <div className='row ustify-content-center text-center m-3'>
   <Link to="/admin" className='col-1 btn btn-success'>Atgal</Link>
   </div>
   <div className='row ustify-content-center text-center m-3'>
   
    <h2 className='col-4 '>Knygu valdymo sasaja</h2>
    
   </div>
   <div className='row ustify-content-center text-center m-3 '>

    <table className=' table'>
        <thead>
            <tr>
                <th className='scope="col"'>Knygos pavadinimas</th>
                <th>Knygos Autorius</th>
                <th>Virselio dailynykas</th>
                <th>Pulapiu knygoje</th>
                <th></th>
                <th></th>
            </tr>
            
        </thead>
        <tbody>
                <tr>
                    <td>testas1</td>
                    <td>testas2</td>
                    <td>testas3</td>
                    <td>testas4</td>
                    <td><button className='btn btn-danger'>Trinti</button></td>
                    <td><button className='btn btn-dark'>Redaguoti</button></td>
                </tr>
            </tbody>

    </table>

   </div>
   </>
  )
}

export default BookContrl