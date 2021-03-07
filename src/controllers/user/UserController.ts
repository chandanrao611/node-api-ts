import { Request, Response } from 'express';
import pokemons = require('../../db.json');
import JSONResponse from '../../helpers/JSONResponse';
import Boom from '../../helpers/http-handler';
export class UserController {
    constructor() {

    }
    public async allUsers(req: Request, res: Response) {
        try {
            console.log(req.body);
            // res.status(200).send(pokemons);
            return JSONResponse(res, Boom.badImplementation('error'))
        } catch (error) {
            // return JSONResponse.success(res,pokemons,'All users list')
        }

    }
    public async userProfile(req: Request, res: Response) {
        res.status(200).send(pokemons);
    }
}