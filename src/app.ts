import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import { router as ApiRoutes } from "./routes/api";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notFound.middleware";
class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routeConfig();
    }
    /**
     * Configuration for body parser
     */
    private config(): void {
        // view engine setup
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        // view engine setup
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        this.app.use(logger('combined', {
            skip: function (req, res) { return res.statusCode < 400 }
        }))
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        // app.use(express.json());
        // app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));
        /**
         * Apply cors
         */
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'X-Requested-With,content-type,Accept, Authorization'
            );
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                return res.status(200).json({});
            }
            next();
        });
    }
    /**
     * Conguration api routes
     */
    private routeConfig(): void {
        // const routes: express.Router = express.Router();
        this.app.use('/api', ApiRoutes);
        this.app.use(errorHandler);
        this.app.use(notFoundHandler);
    }
}

export default new App().app;