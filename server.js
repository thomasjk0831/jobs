import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'

//setup middleware to use logging about requests
if(process.env.NODE.ENV === 'development')
app.use(morgan('dev'))

//setup middleware to accept json
app.use(express.json())

app.get("/", (req, res)=>{
  res.send("hello world")
})

app.post('/', (req,res)=>{
  console.log(req)
  res.json({message: 'data received', data: req.body})
})

const port = process.env.PORT || 5100
app.listen(port, ()=>{
    console.log("listening on 5100...")
})
