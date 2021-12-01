import { ResourceRouter } from './ResourceRouter.js';
import { ProjectController } from "../app/controllers/ProjectController.js";

/**
 * Projects router
 * Extends ResourceRouter class
 */
export default class ProjectRouter extends ResourceRouter
{

    constructor() {
        super();

        this.router
            .get('/',(req: any, res:any) => ProjectController.showAll(req, res))
            .get('/:id',(req: any, res:any) => ProjectController.show(req, res))
            .post('/create',(req:any, res:any) => ProjectController.create(req, res))
            .patch('/update',(req:any, res:any) => ProjectController.update(req, res))
            .delete('/delete',(req:any, res:any) => ProjectController.remove(req, res))
    }

}
