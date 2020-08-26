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
                const newWarehouse = new warehouse_model_1.Warehouse(req.body);
                newWarehouse.save((err, warehouse) => {
                    console.log("Added to warehouse");
                });
            }
        });
    }
    update(req, res) {
        const storeId = req.params.id;
        if (storeId) {
            store_model_1.Store.findByIdAndUpdate(storeId, req.body, (err, store) => {
                if (err) {
                    res.status(404).json({
                        status: false,
                        message: "Data not found",
                    });
                }
                if (store) {
                    res.status(200).json({
                        status: true,
                        message: "Data has been updated",
                    });
                }
            });
        }
    }
    delete(req, res) {
        const storeId = req.params.id;
        store_model_1.Store.findByIdAndDelete(storeId, (err, deleted) => {
            if (err)
                res.status(500).json({
                    status: false,
                    message: "Something went wrong",
                });
            if (deleted) {
                res.status(204).json({
                    status: true,
                    message: "Data has been deleted.",
                    data: deleted,
                });
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "Data not found",
                });
            }
        });
    }
}
exports.StoreController = StoreController;
//# sourceMappingURL=store.controller.js.map