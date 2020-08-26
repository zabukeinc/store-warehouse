import { WarehouseController } from "../controllers/warehouse.controller";
import { Application, Response, Request } from "express";

export class Routes {
  public warehoueController: WarehouseController = new WarehouseController();

  public routes(app: Application): void {
    /**
     * Warehouse Routes
     */
    app
      .route("/api/warestore")
      .get(this.warehoueController.index)
      .post(this.warehoueController.create);
    app
      .route("/api/warestore/store")
      .get(this.warehoueController.showOnlyStore);
    app
      .route("/api/warestore/warehouse")
      .get(this.warehoueController.showOnlyWarehouse);
    app
      .route("/api/warestore/:id")
      .get(this.warehoueController.show)
      .put(this.warehoueController.update)
      .delete(this.warehoueController.delete);

    // get data by types

    app.all("*", function (req: Request, res: Response) {
      res.status(404).send({
        status: false,
        message: "Endpoint not found",
      });
    });
  }
}
