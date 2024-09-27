import {StatusCodes} from 'http-status-codes'

const testHandler = (err, req, res, next)=>{
    console.log(err)
    const statusCode = err.statusCode || StatusCodes.NOT_ACCEPTABLE
    const msg = err.message || ' error'
    res.status(statusCode).json({msg})
}

export default errorHandler