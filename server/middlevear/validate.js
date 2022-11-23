import Joi from "joi"

const validate = (schema, req, res, next) => {

    const options = {
        //  when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
        abortEarly: true,
//         stripUnknown - remove unknown elements from objects and arrays. Defaults to false.
//          when an object :
//          arrays - set to true to remove unknown items from arrays.
//          objects - set to true to remove unknown keys from objects.
//          when true, it is equivalent to having { arrays: false, objects: true }.
        stripUnknown: true
    }

    const {error, value} = schema.validate(req.body, options)

    let message = ''
    
    // Vygdoma kai laukialiai  ar laukialis neuzpildytas arba blogai supildyti
    if(error){

        console.log(error.details[0].path);

        switch(error.details[0].path[0]){
            case 'name':
             message = 'Neteisngai uzpildytas laukialis '
             break
            case 'last_name':
                message = 'Laukialis turi buti uzpildytas'
                break
                case 'email':
                    message = 'Neteisingai uzpildytas eletroninio pasto adresas'
                    break
                    case 'password':
                        message = 'Blogai uzpildytas slaptazodis'
                        break
                        case 'address':
                            message = 'Blogai uzpildytas slaptazodis'
                         break
                       
        }

        return  res.status(500).send(message)


    }
      // jei viskas ok paleidziama sita dalis ir su next persokama i tolesni talpinimo procesa
      req.body = value

      next()
}

export  const loginValidator = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(12).required()
    })

    validate(schema, req, res, next)
}


export  const resgiterValidator = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        last_name: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(12).required()
        
    })

    validate(schema, req, res, next)
}
//resgiterValidator  end



export default validate