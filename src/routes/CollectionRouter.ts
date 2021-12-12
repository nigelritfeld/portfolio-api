import express, {Router} from "express";
import {accept, contentType} from "../app/middlewares/headerMiddleware";
export class  CollectionRouter {
    router: Router = express.Router()

    static routes(callbacks: any, router = express.Router())
    {
        router.use(accept)
        router.use(contentType)

        return router
            .get('/',(req: any, res:any) => callbacks.index(req, res))
            .get('/:id',(req: any, res:any) => callbacks.show(req, res))
            .post('/',(req:any, res:any) => callbacks.create(req, res))
            .options('/',(req:any, res:any) => callbacks.options(req, res))
            .options('/:id',(req:any, res:any) => callbacks.options(req, res))

    }

}

