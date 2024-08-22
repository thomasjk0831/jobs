import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import { nanoid } from 'nanoid'

const jobs = [
  {id: nanoid(), company: "IBM", position: "project manager"},
  {id: nanoid(), company: "Pepsi", position: "Cashier"}
]

//setup middleware to use logging about requests
if(process.env.NODE.ENV === 'development')
app.use(morgan('dev'))

//setup middleware to accept json
app.use(express.json())

app.get("/", (req, res)=>{
  res.send("hello world")
})

// GET JOBS
app.get("/jobs", (req, res)=>{
  res.status(200).json({ jobs })
})

//GET SINGLE JOB
app.get('/api/v1/jobs/:id', (req, res)=>{
  const { id } = req.params
  const job = jobs.find(job=>job.id === id)
  if(!job){
    return res.status(404).json({ msg: `no job with id ${id}`})
  }
  res.status(200).json({ job })
})

// CREATE JOB
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body
  if(!company || !position){
    return res.status(400).json({msg: 'please provide company and position'})
  }

  const id = nanoid(10)
  const job = {id, company, position}
  jobs.push(job)
  return res.status(201).json({ job })
})

app.post('/', (req,res)=>{
  console.log(req)
  res.json({message: 'data received', data: req.body})
})

const port = process.env.PORT || 5100
app.listen(port, ()=>{
    console.log("listening on 5100...")
})
