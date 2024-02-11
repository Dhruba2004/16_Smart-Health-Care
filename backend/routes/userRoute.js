import express from 'express';
import {updateUser,deleteUser,getAllUser,getUser} from '../controllers/UserController.js'

const router = express.Router()

router.get('/:id',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.get('/',getAllUser)

export default router;