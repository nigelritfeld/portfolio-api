import { ResourceRouter } from './ResourceRouter.js';
import { ProjectController } from "../app/controllers/ProjectController.js";

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
    }

}
