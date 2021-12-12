import { ResourceRouter } from '../../app/Base/ResourceRouter.js';
import { ProjectController } from "../../app/Controllers/ProjectController.js";

/**
 * Projects router
 * Extends ResourceRouter class
 */
export default class ProjectCollectionRouter extends ResourceRouter
{
    static routeCallbacks = {
        'index' : ProjectController.showAll,
        'create' : ProjectController.create,
        'show' : ProjectController.show,
        'options' : ProjectController.collectionOptions,
    }

    constructor() {
        super();

    }

}
