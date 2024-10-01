import {StatusCodes} from 'http-status-codes'

const errorHandler = (err, req, res, next)=>{
    console.log(err)
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const msg = err.message || 'unspecified error'
    res.status(statusCode).json({msg})
}

const defaultHandler = (err, req, res, next)=>{
    console.log(err)
    const statusCode = err.statusCode || StatusCodes.SERVICE_UNAVAILABLE
    const msg = err.message || 'default error'
    res.status(statusCode).json({msg})
}

export default errorHandler