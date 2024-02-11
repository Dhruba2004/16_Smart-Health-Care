import express from 'express';
import {updateDoctor,deleteDoctor,getAllDoctors, getDoctor} from '../controllers/DoctorController.js'

const router = express.Router()

router.get('/:id',getDoctor);
router.put('/:id',updateDoctor);
router.delete('/:id',deleteDoctor);
router.get('/',getAllDoctors)

export default router;