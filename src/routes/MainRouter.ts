import {BaseRouter} from "../app/Base/BaseRouter";
import {ResourceRouter} from "../app/Base/ResourceRouter";
import {CollectionRouter} from "../app/Base/CollectionRouter";
import ProjectRouter from "./Resource/ProjectRouter";
import ProjectCollectionRouter from "./Collection/ProjectCollectionRouter";

/**
 * Main router class
 */
export class MainRouter extends BaseRouter{
    constructor() {
        super();
        this.router.use('/project' , ResourceRouter.routes(ProjectRouter.routeCallbacks))
        this.router.use('/projects' , CollectionRouter.routes(ProjectCollectionRouter.routeCallbacks))
        this.router.get('/', function (req, res){
            res
                .status(200)
                .json({
                    Message: "Portfolio API",
                    Author: "Nigel Ritfeld",
                    Github: "https://github.com/nigelritfeld",
                })
        })
    }
}
