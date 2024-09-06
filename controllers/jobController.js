import { nanoid } from 'nanoid'
import Job from '../models/JobModel.js'

let jobs = [
  {id: nanoid(), company: "IBM", position: "project manager"},
  {id: nanoid(), company: "Pepsi", position: "Cashier"},
  {id: nanoid(), company: "Coke", position: "teller"},
]

export const getAllJobs = async (req, res)=>{
    res.status(200).json({ jobs })
}

export const getSingleJob = async (req, res) => {
  const { id } = req.params
  const job = jobs.find(job=>job.id === id)
  if(!job){
    throw new Error()
  }
  res.status(200).json({ job })
}

export const editJob = async (req, res) => {
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
  
}

export const createJob = async (req, res) => {
    const { company, position } = req.body
    if(!company || !position){
      return res.status(400).json({msg: 'please provide company and position'})
    }
  
    const job = await Job.create(req.body)
    res.status(201).json({ job })
}

export const deleteJob = async (req,res)=> {
    const { id } = req.params
    const job = jobs.find(job=>job.id === id)
    if(!job){
      return res.status(404).json({msg: `no job with id: ${id}`})
    }
    const newJobs = jobs.filter(job=>job.id !== id)
    jobs = newJobs
    res.status(200).json({msg: `job deleted with id: ${id}`})
}
