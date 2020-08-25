import * as express from "express";
import * as bodyParser from "body-parser";

import { Routes } from "./config/routes";
import * as mongoose from "mongoose";
class App {
  public app: express.Application;
  public routePrev: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrev.routes(this.app);
    this.setMongoConfig();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
  }

  private setMongoConfig() {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/local", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }
}
export default new App().app;
