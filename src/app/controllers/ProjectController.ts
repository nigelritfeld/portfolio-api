import {Model} from "mongoose";

export class ProjectController {
    static Project: Model<any> = require('../models/Page.js')
    static showAll(req:any, res:unknown)
    {
        // @ts-ignore
        this.Project.find((req:any, res:unknown, err:any, projects:any) => {
            if (err)
            {
                // @ts-ignore
                res.status(500).send(err)
            }else{
                // @ts-ignore
                res.json(projects);
            }
            // typeof err !== "undefined" ? res.status(500).send(err) : res.json(projects);
        })
    }
    static show(req:any, res:unknown)
    {
        // @ts-ignore
        res.send('Show Project')
    }
    static create(req:any, res:unknown)
    {

        // @ts-ignore
        // this.Project.create()
        // @ts-ignore
        res.json(req.body).send()
    }
    static update(req:any, res:unknown)
    {
        // @ts-ignore
        res.send('Update Project')
    }
    static remove(req:any, res:unknown)
    {
        // @ts-ignore
        res.send('Delete Project')
    }
    static options(req:any, res:unknown)
    {
        // @ts-ignore
        res.header('Allow', "GET, POST, PATCH, DELETE").send();
    }
}

