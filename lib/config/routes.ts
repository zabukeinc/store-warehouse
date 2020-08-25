import { WarehouseController } from "../controllers/warehouse.controller";
import { StoreController } from "../controllers/store.controller";
import { Application, Response, Request } from "express";

export class Routes {
  public warehoueController: WarehouseController = new WarehouseController();
  public storeController: StoreController = new StoreController();

  public routes(app: Application): void {
    /**
     * Store Routes
     */
    app
      .route("/api/store")
      .get(this.storeController.index)
      .post(this.storeController.create);

    app
      .route("/api/store/:id")
      .get(this.storeController.show)
      .put(this.storeController.update)
      .delete(this.storeController.delete);

    /**
     * Warehouse Routes
     */
    app
      .route("/api/warehouse")
      .get(this.warehoueController.index)
      .post(this.warehoueController.create);

    app
      .route("/api/warehouse/:api")
      .get(this.warehoueController.show)
      .put(this.warehoueController.update)
      .delete(this.warehoueController.delete);

    app.all("*", function (req: Request, res: Response) {
      res.status(404).send({
        status: false,
        message: "Endpoint not found",
      });
    });
  }
}
