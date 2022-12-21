require('dotenv').config()
const express=require('express')
const app=express()
const path=require('path')
const cors=require('cors')

const {SERVER_PORT}=process.env

const {getALLResult}=require('./controller.js')

app.use(express.json())
app.use(cors())




app.get('/api/robots', (req, res) => {
  try {
      res.status(200).send(botArr)
  } catch (error) {
    
      console.log('ERROR GETTING BOTS', error)
      res.sendStatus(400)
  }
})
app.get()
app.put()



app.listen(SERVER_PORT,()=>console.log('gliding on 4006'))