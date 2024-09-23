import {body,validationResult} from 'express-validator'
import { badRequestError } from '../errors/customeErrors.js'

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

export const validateTest = withValidationErrors([
    body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ min: 1, max:40})
    .withMessage('name must be between 3 and 40 chars')
    .trim()
])