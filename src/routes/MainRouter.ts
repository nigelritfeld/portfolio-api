import {BaseRouter} from "./BaseRouter";
import {ResourceRouter} from "./ResourceRouter";
import {CollectionRouter} from "./CollectionRouter";
import ProjectRouter from "./ProjectRouter";
import ProjectCollectionRouter from "./ProjectCollectionRouter";
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Customer API",
            description: "Customer API Information",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:5000"]
        }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
};


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
                .json({home: "ddd"})
        })
    }
}
