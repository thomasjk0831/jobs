import {body, validationResult, param } from 'express-validator'
import { badRequestError } from '../errors/customeErrors.js'
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js'
import mongoose from 'mongoose'

const withValidationErrors = (validateValues) => {
    return [
        validateValues, 
        (req,res,next) => {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                const errorMessages= errors.array().map((error)=>error.msg)
                throw new badRequestError(errorMessages)
            }
            next()
        }
    ]
}

export const validateJobInput = withValidationErrors([
    body('company').notEmpty().withMessage('company is required'),
    body('position').notEmpty().withMessage('position is required'),
    body('jobLocation').notEmpty().withMessage('jobLocation is required'),
    body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('invalid status'),
    body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('invalid type')
])

export const validateId = withValidationErrors([
    param('id')
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage('invalid MongoDB id')
])