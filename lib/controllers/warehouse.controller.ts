import { Request, Response } from "express";
import { MongooseDocument } from "mongoose";
import { Warehouse } from "../models/warehouse.model";
export class WarehouseController {
  public index(req: Request, res: Response) {
    Warehouse.find({}, (err: Error, Warehouse: any) => {
      if (err)
        res.status(500).send({
          status: false,
          message: "Something went wrong",
        });

      if (Warehouse) {
        res.status(200).send({
          status: true,
          message: "Get all data",
          data: Warehouse,
        });
      } else {
        res.status(200).send({
          status: true,
          message: "Data is empty",
          data: Warehouse,
        });
      }
    });
  }

  public show(req: Request, res: Response) {
    const WarehouseCode = req.params.id;
    Warehouse.findOne(
      { Warehouse_code: WarehouseCode },
      (err: Error, Warehouse: any) => {
        if (err)
          res.status(500).send({
            status: false,
            message: "Something went wrong",
          });

        if (Warehouse) {
          res.status(200).send({
            status: true,
            message: "Get data by Warehouse code",
            data: Warehouse,
          });
        } else {
          res.status(404).send({
            status: false,
            message: "Data is not found",
          });
        }
      }
    );
  }

  public create(req: Request, res: Response) {
    const newWarehouse = new Warehouse(req.body);
    newWarehouse.save((err: Error, Warehouse: MongooseDocument) => {
      if (err) {
        res
          .status(500)
          .send({ status: false, message: "Something went wrong" });
      } else {
        res.status(201).send({
          status: true,
          message: "Data successfully added",
        });
      }
    });
  }

  public update(req: Request, res: Response) {
    const WarehouseId = req.params.id;
    if (WarehouseId) {
      Warehouse.findByIdAndUpdate(
        WarehouseId,
        req.body,
        (err: Error, Warehouse: any) => {
          if (err) {
            res.status(404).json({
              status: false,
              message: "Data not found",
            });
          }

          if (Warehouse) {
            res.status(200).json({
              status: true,
              message: "Data has been updated",
            });
          }
        }
      );
    }
  }

  public delete(req: Request, res: Response) {
    const WarehouseId = req.params.id;
    Warehouse.findByIdAndDelete(WarehouseId, (err: Error, deleted: any) => {
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
      } else {
        res.status(404).json({
          status: false,
          message: "Data not found",
        });
      }
    });
  }
}
