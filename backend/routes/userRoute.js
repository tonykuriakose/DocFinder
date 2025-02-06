import express from 'express';
import { loginUser, registerUser,getProfile} from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile", authUser, getProfile)
export default userRouter;