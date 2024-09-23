import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'
import { notFoundError } from '../errors/customeErrors.js'

export const getAllJobs = async (req, res)=>{
  const jobs = await Job.find({})
    res.status(200).json({ jobs })
}

export const getSingleJob = async (req, res) => {
  const { id } = req.params
  const job = await Job.findById(id)
  if(!job){
    throw new notFoundError(`job ${id} not found`)
  }
  res.status(StatusCodes.OK).json({ job })
}

export const editJob = async (req, res) => {

    const { id } = req.params
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if(!updatedJob){
      throw new notFoundError(`job ${id} not found`)
    }
  
    res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob})
  
}

export const createJob = async (req, res) => {
    const { company, position } = req.body
    if(!company || !position){
      return res.status(StatusCodes.BAD_REQUEST).json({msg: 'please provide company and position'})
    }
  
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

export const deleteJob = async (req,res)=> {
    const { id } = req.params
    const removedJob = await Job.findByIdAndDelete(id)
    if(!removedJob){
      throw new notFoundError(`job with ${id} not found`)
    }
   
    res.status(StatusCodes.OK).json({msg: 'job deleted', job: removedJob})
}
