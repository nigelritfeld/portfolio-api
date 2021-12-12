import {ProjectInterface} from "../Interfaces/Project";

const mongoose = require('mongoose')
const { Schema } = mongoose;

import Model from "../Base/Model.js";
import Virtual from "../Virtuals/Virtual.js";

export default class Project extends Model{
    static schema = new Schema({
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }, Model.opts)
    static loadClass = Project.schema.loadClass(Virtual);
    static Model = mongoose.model('Project', Project.schema)

    _data: any;
    _model: any;

    constructor(data: ProjectInterface = {title :'', image: '', description: ''}, model = mongoose.model('Project', Project.schema)) {
        super()
        this.model = model(data)
        console.log('created Model')

    }

    /**
     * Static method to find models
     * @param filters
     * @param callback
     */
    static find(filters: any, callback: any): void {
        return Project.prototype.find(filters, callback)
    }
    /**
     * Object method that resolves to the use mongoose find method
     * @param filters
     * @param callback
     */
    find(filters: any, callback: any): void {
        this.model.find(filters, callback)
    }

    /**
     * List all resources in collection
     * @param req
     * @param res
     */
    static async all(req: any, res:any) {
        try {
            let totalPages, prevPage, nextPage
            const totalItems = await Project.Model.estimatedDocumentCount()
            let {start, limit} = req.query // Query params
            if (!start) {
                start = 1
            }
            if (!limit) {
                limit = totalItems
            }
            const size = parseInt(limit)
            const skip = (start - 1) * size;
            const collection = await Project.Model.find().limit(size).skip(skip)
            console.log(totalItems)
            totalPages = Math.ceil(totalItems / size)
            return {
                items: collection,
                _links: {
                    self: {
                        // @ts-ignore
                        href: `http://${req.headers.host}${req.baseUrl}`,
                    },
                    collection: {
                        href: `http://${req.headers.host}${req.baseUrl}`
                    },
                },
                pagination: {
                    currentPage: parseInt(start),
                    currentItems: collection.length,
                    totalPages: totalPages,
                    totalItems: totalItems,
                    _links: {
                        first: {
                            page: 1,
                            href: `http://${req.headers.host}${req.baseUrl}?start=${1}&limit=${limit}`
                        },
                        last: {
                            page: totalPages,
                            href: `http://${req.headers.host}${req.baseUrl}?start=${totalPages}&limit=${limit}`
                        },
                        previous: {
                            page: prevPage = start === 1 ? start : (start - 1),
                            href: `http://${req.headers.host}${req.baseUrl}?start=${prevPage}&limit=${limit}`
                        },
                        next: {
                            page: nextPage = parseInt(start) === totalPages ? start : (parseInt(start) + 1),
                            href: `http://${req.headers.host}${req.baseUrl}?start=${nextPage}&limit=${limit}`
                        }
                    },
                }
            }
        } catch (e) {
            // @ts-ignore
            res.status(500).json({
                statusCode: 500,
                message: e.message,
            })
        }
    }

    /**
     * Object method that resolves to the use mongoose save method
     */
    // @ts-ignore
    async save(req:any,res:any): Promise<void> {

        try {
            console.log("Trying to save model:")
            console.log(this.model)
            await this.model.save()
            console.log(`Model ${this.model.title} is saved to mongodb`)
            // @ts-ignore
            res.status(201)
                .header("Content-Type", "application/json")
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
                .json(this.model)
        }catch (e) {
            // @ts-ignore
            res
                .status(400)
                .json({
                    statusCode:400,
                    message: e
                })
        }

    }

    /**
     * Deletes resource
     * @param req
     * @param res
     */
    async delete(req:any,res:any): Promise<void> {

        try {
            console.log(`Trying to delete ${req.params.id}`)
            await this.model.findByIdAndRemove(req.params.id)
            // @ts-ignore
            res.status(201)
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
                .json(this.model)
        }catch (e) {
            // @ts-ignore
            res
                .status(400)
                .json({
                    statusCode:400,
                    message: e
                })
        }

    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get model(): any {
        return this._model
    }

    set model(value) {
        this._model = value;
    }

}


