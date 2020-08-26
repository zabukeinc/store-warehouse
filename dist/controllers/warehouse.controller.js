"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseController = void 0;
const warehouse_model_1 = require("../models/warehouse.model");
class WarehouseController {
    index(req, res) {
        warehouse_model_1.Warehouse.findAll({})
            .then((store) => {
            if (store.length > 0) {
                res.status(200).json({
                    status: true,
                    message: "Get all data warehouse and store",
                    data: store,
                });
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "Data is empty",
                    data: store,
                });
            }
        })
            .catch((err) => res.status(500).json({ status: false, message: "Something went wrong" }));
    }
    show(req, res) {
        const warehouseCode = req.params.id;
        const warehouseId = parseInt(req.params.id);
        if (warehouseId) {
            warehouse_model_1.Warehouse.findByPk(warehouseId)
                .then((warehouse) => {
                if (warehouse) {
                    res.status(200).json({
                        status: true,
                        message: "Get data by ID",
                        data: warehouse,
                    });
                }
                else {
                    res.status(404).json({
                        status: false,
                        message: "Data is empty",
                        data: warehouse,
                    });
                }
            })
                .catch((err) => {
                res.status(500).json({
                    status: false,
                    message: "Something went wrong",
                });
            });
        }
        else if (warehouseCode != "") {
            warehouse_model_1.Warehouse.findOne({ where: { warehouse_code: warehouseCode } })
                .then((warehouse) => {
                if (warehouse) {
                    res.status(200).json({
                        status: true,
                        message: "Get data by warehouse_code",
                        data: warehouse,
                    });
                }
                else {
                    res.status(404).json({
                        status: false,
                        message: "Data not found",
                    });
                }
            })
                .catch((err) => res
                .status(500)
                .json({ status: false, message: "Something went wrong" }));
        }
    }
    create(req, res) {
        const params = req.body;
        warehouse_model_1.Warehouse.create(params)
            .then((warehouse) => {
            res.status(201).json({
                status: true,
                message: "Data sucessfully added",
            });
        })
            .catch((err) => {
            res.status(500).json({
                status: false,
                message: "Failed to add data",
            });
        });
    }
    update(req, res) {
        const warehouseId = parseInt(req.params.id);
        const warehouseCode = req.params.id;
        const params = req.body;
        // search data by warehouse id
        if (warehouseId) {
            warehouse_model_1.Warehouse.findByPk(warehouseId).then((warehouse) => {
                if (warehouse) {
                    const dataUpdate = {
                        where: { id: warehouseId },
                        limit: 1,
                    };
                    warehouse_model_1.Warehouse.update(params, dataUpdate)
                        .then(() => {
                        res.status(202).json({
                            status: true,
                            message: "Data successfully updated",
                        });
                    })
                        .catch((err) => {
                        res.status(500).json({
                            status: false,
                            message: "Data failed to update",
                        });
                    });
                }
                else {
                    res.status(404).json({
                        status: false,
                        message: "Data not found",
                    });
                }
            });
            // search data by warehouse code
        }
        else if (warehouseCode != "") {
            warehouse_model_1.Warehouse.findOne({ where: { warehouse_code: warehouseCode } }).then((warehouse) => {
                if (warehouse) {
                    const dataUpdate = {
                        where: { warehouse_code: warehouseCode },
                        limit: 1,
                    };
                    warehouse_model_1.Warehouse.update(params, dataUpdate)
                        .then(() => {
                        res.status(202).json({
                            status: true,
                            message: "Data successfully updated",
                        });
                    })
                        .catch((err) => {
                        res.status(500).json({
                            status: false,
                            message: "Data failed to update",
                        });
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
    delete(req, res) {
        const warehouseId = parseInt(req.params.id);
        if (warehouseId) {
            warehouse_model_1.Warehouse.findByPk(warehouseId)
                .then((branch) => {
                if (branch) {
                    const options = {
                        where: { id: warehouseId },
                        limit: 1,
                    };
                    warehouse_model_1.Warehouse.destroy(options)
                        .then(() => res.status(202).json({
                        status: true,
                        data: "Data successfully deleted.",
                    }))
                        .catch((err) => res.status(500).json({
                        status: false,
                        message: "Something went wrong",
                        error: err,
                    }));
                }
                else {
                    res.status(404).json({ status: false, message: "Data not found." });
                }
            })
                .catch((err) => {
                res.status(500).json({ status: false, message: err.message });
            });
        }
        else {
            res.status(500).json({
                status: false,
                message: "Something went wrong",
            });
        }
    }
}
exports.WarehouseController = WarehouseController;
//# sourceMappingURL=warehouse.controller.js.map