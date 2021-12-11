import Project from "../Models/Project.js";

export class ProjectController {


    static async showAll(req: any, res: unknown) {
        console.log('Requested collection')
        const data = await Project.all(req, res)
        // @ts-ignore
        res
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            .json(data)

    }

    static show(req: any, res: unknown) {
        console.log('Requested detail resource')
        Project.Model.findOne({_id: req.params.id}, function (error: any, project: any) {
            if (project === null) {
                console.log('error:' + error)
                // @ts-ignore
                res.status(404).json({
                    statusCode: 404,
                    message: "not found",
                })
            } else {
                console.log('succes')
                // @ts-ignore
                res.status(200)
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
                    .json(project)
            }

        })

    }

    static async create(req: any, res: unknown) {
        console.log('Requested to create resource')

        let project = new Project({
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
        })
        await project.save(req, res)
    }

    static async update(req: any, res: unknown) {
        console.log('Requested to update resource')
        try {
            let project = await Project.Model.findOneAndUpdate({_id: req.params.id}, req.body)
            // @ts-ignore
            res.status(202).json(project)
        } catch (e) {
            // @ts-ignore
            res.status(400).json({
                statusCode: 400,
                message: e.message,
            })
        }
    }

    static async replace(req: any, res: unknown) {
        console.log('Requested to update resource')
        try {
            let project = await Project.Model.findOneAndReplace({_id: req.params.id}, req.body)
            // @ts-ignore
            res.status(201).json(project)
        } catch (e) {
            // @ts-ignore
            res.status(400).json({
                statusCode: 400,
                message: e.message,
            })
        }
    }

    static remove(req: any, res: unknown) {
        console.log('Requested to delete')
        Project.Model.findOne({_id: req.params.id}, function (error: any, project: any) {
            try {
                const resp =
                    {
                        notice: "successfully deleted resource",
                        statusCode: 204,
                        item: project
                    }
                project.remove()

                // @ts-ignore
                res.status(204).send(resp)

            } catch (e) {
                // @ts-ignore
                res.send(500).json({message: e.message})
            }
        })
        // @ts-ignore

    }

    static options(req: any, res: unknown) {
        // @ts-ignore
        res.status(200)
            .header("Allow", "GET,OPTIONS,DELETE,PUT,PATCH")
            .header("Content-Type", "application/json")
            .header("Access-Control-Allow-Methods", "GET,OPTIONS,DELETE,PUT,PATCH")
            .send()
    }

    static collectionOptions(req: any, res: unknown) {
        // @ts-ignore
        res.status(200)
            .header("Allow", "GET,POST,OPTIONS")
            .header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            .send()

    }
}

