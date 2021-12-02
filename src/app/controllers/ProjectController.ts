export class ProjectController {

    static showAll(req:any, res:unknown)
    {
        // @ts-ignore
        res.send('show all projects')
    }

    static show(req:any, res:unknown)
    {
        // @ts-ignore
        res.send('Show Project')
    }
    static create(req:any, res:unknown)
    {
        // @ts-ignore
        res.send('Create Project')
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

