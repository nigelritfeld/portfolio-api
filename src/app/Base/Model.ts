export default abstract class Model {
    static opts: any = {toJSON: {
            virtuals: true,
            minimize: false
        }, toObject: {
            virtuals: true,
            minimize: false}};
    abstract _data: any;
    abstract _model: any
    /**
     * Returns query
     * @param filters
     * @param callback
     */
    abstract find(filters: any, callback: any) : void;
    /**
     * Saves to the database
     */
    abstract save(): Promise<void>

    /**
     * Getter for data
     */
    abstract get data(): any

    /**
     * Setter for data
     * @param value
     */
    abstract set data(value: any)

    /**
     * Getter for data
     */
    abstract get model(): any
    /**
     * Setter for data
     * @param value
     */
    abstract set model(value: any)
}


