import { Router } from "express";
import { userRouter as userRouter } from './api/index';
let router = Router();
/**
 * Define the all routes
 */
router.use('/user', userRouter);
export { router };