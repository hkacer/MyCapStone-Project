require('dotenv').config()
const express = require('express')
const app = express()
const path=require('path')
const cors=require('cors')
const {SERVER_PORT} = process.env
const router = express.Router();

const corsOptions = {
  exposedHeaders: 'Authorization',
};

app.use(express.json())
app.use(cors(corsOptions))


const {getPresidentsSecond,deleteComments,createPresidentComment,getAllComments,getUserComments}=require('./controllerSecond.js')
// const { getPresidents} = require('./controller.js')

app.use(express.static('public'))
const { searchVote, addVote } = require ('./controllers/voteController')
const { userLogin, userSignup} = require('./controllers/authController')
const { seed } = require('./controllers/db/seed.db.controller.js')
const { isAuthenticated } = require('./controllers/middleware/isAuthenticated')

app.post('/api/list/:id',isAuthenticated)
app.get('/api/list/:id', isAuthenticated)
//app.post('/seed', seed)
app.get('/allComments',getAllComments)
app.get('/userComments/:id',getUserComments )
// app.get('/presidents', getPresidents)
app.get('/presidentsSecond',getPresidentsSecond)
//app.get('/presidentsSecond',createPresidentDropDown)
app.delete('/allComments/:id', deleteComments)
app.post('/presidents/:id/comments', createPresidentComment);
//app.post('http://localhost:4004/signin',getUserInfo)

app.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname,'../public/index.html'))
})

//external api endpoints
//app.get('/api/query',searchVote)


//auth endpoints
app.post('/api/login',userLogin)
app.post('/api/signUp',userSignup)

//seed endpoint
//app.post('/seed',seed)

app.post('/api/list',addVote)




app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))