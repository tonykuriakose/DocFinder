import express from 'express';
import { doctorList} from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';
const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList)


export default doctorRouter;