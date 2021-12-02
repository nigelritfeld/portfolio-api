import express, {Router} from "express";
import {ProjectController} from "../app/controllers/ProjectController";
export class ResourceRouter {
    router: Router = express.Router()

    static routes(callbacks: any, router = express.Router())
    {
        return router
            .get('/',(req: any, res:any) => callbacks.index(req, res))
            .options('/',(req:any, res:any) => callbacks.options(req, res))
            .get('/:id',(req: any, res:any) => callbacks.details(req, res))
            .options('/:id',(req: any, res:any) => callbacks.options(req, res))
            .post('/create',(req:any, res:any) => callbacks.create(req, res))
            .patch('/update',(req:any, res:any) => callbacks.update(req, res))
            .delete('/delete',(req:any, res:any) => callbacks.delete(req, res))
    }

}

