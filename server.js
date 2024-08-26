import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import { nanoid } from 'nanoid'

let jobs = [
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

//EDIT JOB
app.patch('/api/v1/jobs/:id', (req, res) => {
  const { company, position } = req.body
  if(!company || !position){
    return res.status(400).json({ msg: 'please provide company and position'})
  }

  const { id } = req.params
  const job = jobs.find(job => job.id === id)
  if(!job){
    return res.status(404).json({ msg: `job with ${id} not found`})
  }

  job.company = company
  job.position = position
  res.status(200).json({ msg: 'job modified', job})

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

// DELETE
app.delete('/api/v1/jobs/:id', (req,res)=>{
  const { id } = req.params
  const job = jobs.find(job=>job.id === id)
  if(!job){
    return res.status(404).json({msg: `no job with id: ${id}`})
  }
  const newJobs = jobs.filter(job=>job.id !== id)
  jobs = newJobs
  res.status(200).json({msg: `job deleted with id: ${id}`})
})

//ERROR IF NO ROUTES MATCH
app.use('*', (req,res)=>{
  res.status(404).json({msg:'not found'})
})

//ERROR HANDLE HAS TO BE LAST ROUTE
app.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).json({msg:'something went wrong'})
})

const port = process.env.PORT || 5100
app.listen(port, ()=>{
    console.log("listening on 5100...")
})

function inOrderTraverse(tree, array) {
  if(tree !== null){
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array
}

function preOrderTraverse(tree, array) {
  if(tree !== null){
    
  array.push(tree.value)
  preOrderTraverse(tree.left, array)
  preOrderTraverse(tree.right, array)
  }
  return array
}

function postOrderTraverse(tree, array) {
  if(tree !== null){
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.push(tree.value)
  }
  return array
}