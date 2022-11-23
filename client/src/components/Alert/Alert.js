import { useContext, useEffect } from "react"
import MainContext from "../MainCintext/MainContext"

const Alert = () => {

    const {alert, setAlert} =  useContext(MainContext)


    useEffect(() => {

        if(alert.message === '')
            return
                setTimeout(() => {

                    setAlert({
                        message:'',
                        status: ''
                        
                    })
                }, 1500)
                
            }, [alert])

    return  alert.message && (
             <div className={`alert alert-${alert.status} mt-5`}>
                {alert.message}
            </div>
         )

}

export default Alert