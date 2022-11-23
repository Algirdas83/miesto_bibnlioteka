import express from 'express'
import cors from 'cors'
import session from 'express-session'
import Users from './controller/users.js'

const app = express()

// Leidzia naudoti failus kataloge publick failais css ir panasiai
// app.use('/publick', express.static('publick'))
// Igalina iskoduoto siunciama data is inputo post metodu  req.body
app.use(express.urlencoded({
    extended: true
}))

app.use('/uploade', express.static('uploade'))

//CORS blokavimo nuėmimas
app.use(cors())


//Duomenų priėmimui JSON formatu
app.use(express.json())



app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: 'labai labai slapta fraze',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    maxAge: 60000
 }
   
}))



  app.use('/api/users/', Users)







app.listen(3000)