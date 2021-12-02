import {ResourceRouter} from "./ResourceRouter";
import ProjectRouter from "./ProjectRouter";
import express from "express";

export class MainRouter extends ResourceRouter{
    constructor() {
        super();
        let newRouter = express.Router()
        this.router.use('/project' , ResourceRouter.routes(ProjectRouter.routeCallbacks))
    }
}
