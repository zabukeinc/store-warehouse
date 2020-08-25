"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreController = void 0;
const store_model_1 = require("../models/store.model");
const warehouse_model_1 = require("../models/warehouse.model");
class StoreController {
    index(req, res) {
        store_model_1.Store.find({}, (err, store) => {
            if (err)
                res.status(500).send({
                    status: false,
                    message: "Something went wrong",
                });
            if (store) {
                res.status(200).send({
                    status: true,
                    message: "Get all data",
                    data: store,
                });
            }
            else {
                res.status(200).send({
                    status: true,
                    message: "Data is empty",
                    data: store,
                });
            }
        });
    }
    show(req, res) {
        const storeCode = req.params.id;
        store_model_1.Store.findOne({ store_code: storeCode }, (err, store) => {
            if (err)
                res.status(500).send({
                    status: false,
                    message: "Something went wrong",
                });
            if (store) {
                res.status(200).send({
                    status: true,
                    message: "Get data by store code",
                    data: store,
                });
            }
            else {
                res.status(404).send({
                    status: false,
                    message: "Data is not found",
                });
            }
        });
    }
    create(req, res) {
        const newStore = new store_model_1.Store(req.body);
        newStore.save((err, store) => {
            if (err) {
                res
                    .status(500)
                    .send({ status: false, message: "Something went wrong" });
            }
            else {
                res.status(201).send({
                    status: true,
                    message: "Data successfully added",
                });
                const newWarehouse = new warehouse_model_1.Warehouse(newStore);
                newWarehouse.save();
            }
        });
    }
    update() { }
    delete() { }
}
exports.StoreController = StoreController;
//# sourceMappingURL=store.controller.js.map