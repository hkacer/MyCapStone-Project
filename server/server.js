require('dotenv').config()
const express = require('express')
const app = express()
const path=require('path')
const cors=require('cors')
const {SERVER_PORT} = process.env

const {getPresidentsSecond, createPresidentDropDown,deletePresident}=require('./controllerSecond.js')
const {seed, getPresidents} = require('./controller.js')



app.use(express.json())
app.use(cors())


//app.post('/seed', seed)
app.get('/presidents', getPresidents)
app.get('/presidentsSecond',getPresidentsSecond)
app.get('/presidentsSecond',createPresidentDropDown)
app.delete('/presidentsSecond/:id', deletePresident)




app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))