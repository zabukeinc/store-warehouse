import { WarehouseController } from "../controllers/warehouse.controller";
import { Application, Response, Request } from "express";

export class Routes {
  public warehouseController: WarehouseController = new WarehouseController();

  public routes(app: Application): void {
    /**
     * Warehouse Routes
     */
    app
      .route("/api/warestore")
      .get(this.warehouseController.index)
      .post(this.warehouseController.create);
    app
      .route("/api/warestore/store")
      .get(this.warehouseController.showOnlyStore);
    app
      .route("/api/warestore/warehouse")
      .get(this.warehouseController.showOnlyWarehouse);
    app
      .route("/api/warestore/:id")
      .get(this.warehouseController.show)
      .put(this.warehouseController.update)
      .delete(this.warehouseController.delete);

    app.all("*", function (req: Request, res: Response) {
      res.status(404).send({
        status: false,
        message: "Endpoint not found",
      });
    });
  }
}
