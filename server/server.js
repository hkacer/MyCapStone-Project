require('dotenv').config()
const express = require('express')
const app = express()
const path=require('path')
const cors=require('cors')
const {SERVER_PORT} = process.env


app.use(express.json())
app.use(cors())


const {getPresidentsSecond,deletePresident,createPresidentComment}=require('./controllerSecond.js')
const {seed1, getPresidents} = require('./controller.js')

app.use(express.static('public'))
const { searchVote, addVote } = require ('./controllers/voteController')
const { userLogin, userSignup} = require('./controllers/authController')
const { seed } = require('./controllers/db/seed.db.controller.js')



app.post('/seed', seed1)
app.get('/presidents', getPresidents)
app.get('/presidentsSecond',getPresidentsSecond)
//app.get('/presidentsSecond',createPresidentDropDown)
app.delete('/presidentsSecond/:id', deletePresident)
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

//app.post('/api/list',addVote)




app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))