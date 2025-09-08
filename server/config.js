import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";


export default class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        const __dirname = dirname(fileURLToPath(import.meta.url));
        this.app.use(express.static(`${__dirname}/../public`));
        console.log(`${__dirname}/../public`);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.info(
                `El servidor se está ejecutando en: http://localhost:${this.port}`
            );
        });
    }
}