import { nanoid } from 'nanoid'
import Job from '../models/JobModel.js'

export const getAllJobs = async (req, res)=>{
  const jobs = await Job.find({})
    res.status(200).json({ jobs })
}

export const getSingleJob = async (req, res) => {
  const { id } = req.params
  const job = await Job.findById(id)
  if(!job){
    return res.status(404).json({msg:`no job with ${id}`})
  }
  res.status(200).json({ job })
}

export const editJob = async (req, res) => {

    const { id } = req.params
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if(!updatedJob){
      return res.status(404).json({ msg: `job with ${id} not found`})
    }
  
    res.status(200).json({ msg: 'job modified', job: updatedJob})
  
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
    const removedJob = await Job.findByIdAndDelete(id)
    if(!removedJob){
      return res.status(404).json({msg: `no job with id: ${id}`})
    }
   
    res.status(200).json({msg: 'job deleted', job: removedJob})
}
