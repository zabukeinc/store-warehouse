"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./config/routes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrev = new routes_1.Routes();
        this.app = express();
        this.config();
        this.routePrev.routes(this.app);
        this.setMongoConfig();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
    }
    setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost:27017/local", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map