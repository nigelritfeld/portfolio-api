import {MainRouter} from "./routes/MainRouter";

require('dotenv').config();
const mongoose = require('mongoose');
const tunnel = require('tunnel-ssh');
import express from "express";

const app = express();

export class Application {

    dev: boolean = process.env.NODE_ENV !== 'production';
    sshTunnelConfig: any = this.dev ? {
        // agent: process.env.SSH_AUTH_SOCK,
        user:process.env.TUNNELSSH_USER,
        password:process.env.TUNNELSSH_PASSWORD,
        // privateKey: require('fs').readFileSync('./id_rsa.ppk'),
        host: '145.24.222.24', //IP adress of VPS which is the SSH server
        port: 22,
        dstHost: '127.0.0.1',
        dstPort: 27017, //or 27017 or something like that
        localHost: '127.0.0.1',
        localPort: 27017 //or anything else unused you want
    } : null;

    router = new MainRouter().router
    constructor() {
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        app.use('/',this.router)
        const port = process.env.APP === 'production' ? process.env.APP_PORT : 3000;
        mongoose.connection.on('connecting', () => {
            console.log('connecting')
            console.log(mongoose.connection.readyState); //logs 2
        });
        mongoose.connection.on('connected', () => {
            console.log('connected');
            console.log(mongoose.connection.readyState); //logs 1
        });
        mongoose.connection.on('disconnecting', () => {
            console.log('disconnecting');
            console.log(mongoose.connection.readyState); // logs 3
        });
        mongoose.connection.on('disconnected', () => {
            console.log('disconnected');
            console.log(mongoose.connection.readyState); //logs 0
        });
        if (this.dev) {
            tunnel(this.sshTunnelConfig, (error:any) => {
                if(error) {
                    console.log("SSH connection error: ", error);
                }
                mongoose.connect(`mongodb://${process.env.DEV_DB_USERNAME}:${process.env.DEV_DB_PASSWORD}@127.0.0.1:27017/${process.env.DEV_DB_NAME}`);
            });
        }
        app.listen(port, () => {
            console.log(`Running app in ${process.env.APP}`)
            console.log(`App listening at http://localhost:${port}`)
        })

    }
}

