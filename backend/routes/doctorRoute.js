import express from 'express';
import { doctorList,loginDoctor,appointmentsDoctor} from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList)
doctorRouter.post("/login", loginDoctor)
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)


export default doctorRouter;