import { Router } from 'express'
const router = Router()

import {
    getAllJobs,
    getSingleJob,
    editJob,
    createJob,
    deleteJob
} from '../controllers/jobController.js'

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getSingleJob).patch(editJob).delete(deleteJob)

export default router