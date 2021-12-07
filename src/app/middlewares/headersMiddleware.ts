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
    req.is("application/json") ? next() : res.status(400).send(missingAcceptError)
}

export function contentType(req:any,res:any, next:any)
{
    console.log(req.contentType)
    // req.is("application/json") ? next() : res.status(400).send(wrongContentType)
    next()
}
