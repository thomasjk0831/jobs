import { Router } from 'express'
const router = Router()

import {
    getAllJobs,
    getSingleJob,
    editJob,
    createJob,
    deleteJob
} from '../controllers/jobController.js'
import {validateJobInput} from '../middleware/validation.js'

router.route('/').get(getAllJobs).post(validateJobInput,createJob)
router.route('/:id').get(getSingleJob).patch(validateJobInput,editJob).delete(deleteJob)

export default router