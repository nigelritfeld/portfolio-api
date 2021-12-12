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
                href: `http://67fa-86-111-208-158.ngrok.io/project/${this.id}`,
            },
            collection: {
                href: `http://67fa-86-111-208-158.ngrok.io/projects`
            },
        };
    }
}
