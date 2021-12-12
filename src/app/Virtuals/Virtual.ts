require("dotenv").config({ path: process.env.PWD + '/.env' })

export default class Virtual
{
    /**
     * Adds links object to the document
     * @return object
     */
    get _links () {
        return {
            self: {
                // @ts-ignore
                href: `http://${process.env.HOST}/project/${this.id}`,
            },
            collection: {
                href: `http://${process.env.HOST}/projects`
            },
        };
    }
}
