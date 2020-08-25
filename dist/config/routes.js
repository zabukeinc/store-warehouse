"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
// import { WarehouseController } from "../controllers/warehouse.controller";
const store_controller_1 = require("../controllers/store.controller");
class Routes {
    constructor() {
        // public warehoueController: WarehouseController = new WarehouseController();
        this.storeController = new store_controller_1.StoreController();
    }
    routes(app) {
        app
            .route("api/store")
            .get(this.storeController.index)
            .post(this.storeController.create);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map