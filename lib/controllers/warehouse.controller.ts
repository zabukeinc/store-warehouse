import { Request, Response } from "express";
import { Warehouse, WarehouseInterface } from "../models/warehouse.model";
import {
  UpdateOptions,
  DestroyOptions,
  ValidationErrorItem,
} from "sequelize/types";

export class WarehouseController {
  public index(req: Request, res: Response) {
    Warehouse.findAll<Warehouse>({})
      .then((store: Array<Warehouse>) => {
        if (store.length > 0) {
          res.status(200).json({
            status: true,
            message: "Get all data warehouse and store",
            data: store,
          });
        } else {
          res.status(404).json({
            status: false,
            message: "Data is empty",
            data: store,
          });
        }
      })
      .catch((err: Error) =>
        res.status(500).json({ status: false, message: err.message })
      );
  }

  public showOnlyStore(req: Request, res: Response) {
    Warehouse.findAll<Warehouse>({ where: { is_store: 1 } })
      .then((warehouse: Array<Warehouse>) => {
        if (warehouse) {
          res.status(200).json({
            status: true,
            message: "Get all data store",
            data: warehouse,
          });
        } else {
          res.status(404).json({
            status: true,
            message: "Data store is empty",
            data: warehouse,
          });
        }
      })
      .catch((err: Error) => {
        res.status(500).json({
          status: false,
          message: err.message,
        });
      });
  }
  public showOnlyWarehouse(req: Request, res: Response) {
    Warehouse.findAll<Warehouse>({ where: { is_store: 0 } })
      .then((warehouse: Array<Warehouse>) => {
        if (warehouse) {
          res.status(200).json({
            status: true,
            message: "Get all data warehouse",
            data: warehouse,
          });
        } else {
          res.status(404).json({
            status: true,
            message: "Data warehouse is empty",
            data: warehouse,
          });
        }
      })
      .catch((err: Error) => {
        res.status(500).json({
          status: false,
          message: err.message,
        });
      });
  }

  public show(req: Request, res: Response) {
    const warehouseCode: string = req.params.id;
    const warehouseId: number = parseInt(req.params.id);
    if (warehouseId) {
      Warehouse.findByPk<Warehouse>(warehouseId)
        .then((warehouse: Warehouse | null) => {
          if (warehouse) {
            res.status(200).json({
              status: true,
              message: "Get data by ID",
              data: warehouse,
            });
          } else {
            res.status(404).json({
              status: false,
              message: "Data not found",
              data: warehouse,
            });
          }
        })
        .catch((err: Error) => {
          res.status(500).json({
            status: false,
            message: err.message,
          });
        });
    } else if (warehouseCode != "") {
      Warehouse.findOne({ where: { warehouse_code: warehouseCode } })
        .then((warehouse: Warehouse | null) => {
          if (warehouse) {
            res.status(200).json({
              status: true,
              message: "Get data by warehouse_code",
              data: warehouse,
            });
          } else {
            res.status(404).json({
              status: false,
              message: "Data not found",
            });
          }
        })
        .catch((err: Error) =>
          res.status(500).json({ status: false, message: err.message })
        );
    }
  }

  public create(req: Request, res: Response) {
    const params: WarehouseInterface = req.body;
    // Logic for Add Store + Generate Warehouse
    if ((params.is_store = true)) {
      Warehouse.create<Warehouse>(params)
        .then((warehouse: Warehouse) => {
          params.warehouse_code = `${warehouse.warehouse_code}-Warehouse`;
          Warehouse.create<Warehouse>(params).then(() => {
            res.status(201).json({
              status: true,
              message: "Data store and warehouse sucessfully added",
            });
          });
        })
        .catch((err: Error) => {
          res.status(500).json({
            status: false,
            message: err.message,
          });
        });
    } else {
      // Logic for Only add warehouse
      Warehouse.create<Warehouse>(params)
        .then(() => {
          res.status(201).json({
            status: true,
            message: "Data warehouse successfully added.",
          });
        })
        .catch((err: Error) => {
          res.status(500).json({
            status: false,
            message: err.message,
          });
        });
    }
  }

  public update(req: Request, res: Response) {
    const warehouseId: number = parseInt(req.params.id);
    const warehouseCode: string = req.params.id;
    const params: WarehouseInterface = req.body;

    // search data by warehouse id
    if (warehouseId) {
      Warehouse.findByPk<Warehouse>(warehouseId).then(
        (warehouse: Warehouse | null) => {
          if (warehouse) {
            const dataUpdate: UpdateOptions = {
              where: { id: warehouseId },
              limit: 1,
            };
            Warehouse.update(params, dataUpdate)
              .then(() => {
                res.status(202).json({
                  status: true,
                  message: "Data successfully updated",
                });
              })
              .catch((err: Error) => {
                res.status(500).json({
                  status: false,
                  message: err.message,
                });
              });
          } else {
            res.status(404).json({
              status: false,
              message: "Data not found",
            });
          }
        }
      );
      // search data by warehouse code
    } else if (warehouseCode != "") {
      Warehouse.findOne({ where: { warehouse_code: warehouseCode } }).then(
        (warehouse: Warehouse | null) => {
          if (warehouse) {
            const dataUpdate: UpdateOptions = {
              where: { warehouse_code: warehouseCode },
              limit: 1,
            };

            Warehouse.update(params, dataUpdate)
              .then(() => {
                res.status(202).json({
                  status: true,
                  message: "Data successfully updated",
                });
              })
              .catch((err: Error) => {
                res.status(500).json({
                  status: false,
                  message: "Data failed to update",
                });
              });
          } else {
            res.status(404).json({
              status: false,
              message: "Data not found",
            });
          }
        }
      );
    }
  }

  public delete(req: Request, res: Response) {
    const warehouseId: number = parseInt(req.params.id);
    if (warehouseId) {
      Warehouse.findByPk<Warehouse>(warehouseId)
        .then((branch: Warehouse | null) => {
          if (branch) {
            const options: DestroyOptions = {
              where: { id: warehouseId },
              limit: 1,
            };
            Warehouse.destroy(options)
              .then(() =>
                res.status(202).json({
                  status: true,
                  data: "Data successfully deleted.",
                })
              )
              .catch((err: Error) =>
                res.status(500).json({
                  status: false,
                  message: "Something went wrong",
                  error: err,
                })
              );
          } else {
            res.status(404).json({ status: false, message: "Data not found." });
          }
        })
        .catch((err: Error) => {
          res.status(500).json({ status: false, message: err.message });
        });
    } else {
      res.status(500).json({
        status: false,
        message: "Something went wrong",
      });
    }
  }
}
