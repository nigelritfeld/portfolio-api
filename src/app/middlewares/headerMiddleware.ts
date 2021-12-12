let missingAcceptError =
    {
        statusCode: "400",
        messageType: "error",
        message: "Missing header: 'Accept: Application/json'",
    }

let wrongContentType =
    {
        statusCode: "400",
        messageType: "error",
        message: "Missing header: 'Content-type: Application/json'",
    }


export function accept(req:any,res:any, next:any)
{
    req.headers.accept.toLowerCase() === "application/json" ? next() : res.status(400).send(missingAcceptError)
}

export function contentType(req:any,res:any, next:any)
{
    // req.is("application/json") ? next() : res.status(400).send(wrongContentType)
    next()
}

export function setType(req:any,res:any, next:any)
{
    res.set('Content-Type', 'Application/json')
    // req.is("application/json") ? next() : res.status(400).send(wrongContentType)
    next()
}
