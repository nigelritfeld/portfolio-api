import { ResourceRouter } from './ResourceRouter.js';
import { ProjectController } from "../app/controllers/ProjectController.js";
import {NextFunction} from "express";

/**
 * Projects router
 * Extends ResourceRouter class
 */
export default class ProjectRouter extends ResourceRouter
{
    static routeCallbacks = {
        'index' : ProjectController.showAll,
        'details' : ProjectController.show,
        'create' : ProjectController.create,
        'update' : ProjectController.update,
        'delete' : ProjectController.remove,
        'options' : ProjectController.options,
    }

    constructor() {

        super();

        this.router.use((req, res, next:NextFunction) => {
            req.headers.accept === "application/json" ? next() : res.status(404).send('Missing accept header "application/json"');
        })
        ProjectRouter.routes(ProjectRouter.routeCallbacks);
    }

    // getInstance()/**/
}
