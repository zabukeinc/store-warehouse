"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const warehouse_controller_1 = require("../controllers/warehouse.controller");
class Routes {
    constructor() {
        this.warehoueController = new warehouse_controller_1.WarehouseController();
    }
    routes(app) {
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
        app.all("*", function (req, res) {
            res.status(404).send({
                status: false,
                message: "Endpoint not found",
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map