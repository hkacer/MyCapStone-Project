require('dotenv').config()
const express=require('express')
const app=express()
const path=require('path')
const cors=require('cors')

const {SERVER_PORT}=process.env

const {getALLResult}=require('./controller.js')

app.use(express.json())
app.use(cors())

app.get()
app.put()



app.listen(SERVER_PORT,()=>console.log('gliding on 4006'))