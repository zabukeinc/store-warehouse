import * as express from "express";
import * as bodyParser from "body-parser";

import { Routes } from "./config/routes";
class App {
  public app: express.Application;
  public routePrev: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrev.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
  }
}
export default new App().app;
