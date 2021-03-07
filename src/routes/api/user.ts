import * as express from 'express';
import { Request, Response } from 'express';
import { userController } from '../../controllers';

export const router = express.Router({ strict: true });
router.post('/', (req: Request, res: Response) => {
    userController.allUsers(req, res);
});