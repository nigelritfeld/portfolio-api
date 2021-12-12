import { ResourceRouter } from '../../app/Base/ResourceRouter.js';
import { ProjectController } from "../../app/Controllers/ProjectController.js";

/**
 * Projects router
 * Extends ResourceRouter class
 */
export default class ProjectRouter extends ResourceRouter
{
    static routeCallbacks = {
        'index' : ProjectController.show,
        'details' : ProjectController.show,
        'create' : ProjectController.create,
        'update' : ProjectController.update,
        'replace' : ProjectController.replace,
        'delete' : ProjectController.remove,
        'options' : ProjectController.options,
    }

    constructor() {
        super();
    }

}
