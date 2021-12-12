import express, {Router} from "express";
import {accept, contentType} from "../Middlewares/headerMiddleware";
export class ResourceRouter {
    router: Router = express.Router()

    static routes(callbacks: any, router = express.Router())
    {
        router.use(accept)
        router.use(contentType)
        return router
            .options('/',(req:any, res:any) => callbacks.options(req, res))
            .options('/:id',(req: any, res:any) => callbacks.options(req, res))
            .get('/',(req: any, res:any) => callbacks.index(req, res))
            .get('/:id',(req: any, res:any) => callbacks.details(req, res))
            .post('/',(req:any, res:any) => callbacks.create(req, res))
            .patch('/:id',(req:any, res:any) => callbacks.update(req, res))
            .put('/:id',(req:any, res:any) => callbacks.replace(req, res))
            .delete('/:id',(req:any, res:any) => callbacks.delete(req, res))
    }

}

