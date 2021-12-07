import {ResourceRouter} from "./ResourceRouter";
import ProjectRouter from "./ProjectRouter";
import {accept, contentType} from "../app/middlewares/headersMiddleware.js";

export class MainRouter extends ResourceRouter{
    constructor() {
        super();
        this.router.use(accept)
        this.router.use(contentType)
        this.router.use('/project' , ResourceRouter.routes(ProjectRouter.routeCallbacks))
    }
}
