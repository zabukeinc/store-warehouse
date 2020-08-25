import { Request, Response } from "express";
import { MongooseDocument } from "mongoose";
import { Store, StoreInterface } from "../models/store.model";
import { Warehouse, WarehouseInterface } from "../models/warehouse.model";

export class StoreController {
  public index(req: Request, res: Response) {
    Store.find({}, (err: Error, store: any) => {
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
      } else {
        res.status(200).send({
          status: true,
          message: "Data is empty",
          data: store,
        });
      }
    });
  }

  public show(req: Request, res: Response) {
    const storeCode = req.params.id;
    Store.findOne({ store_code: storeCode }, (err: Error, store: any) => {
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
      } else {
        res.status(404).send({
          status: false,
          message: "Data is not found",
        });
      }
    });
  }

  public create(req: Request, res: Response) {
    const newStore = new Store(req.body);
    newStore.save((err: Error, store: MongooseDocument) => {
      if (err) {
        res
          .status(500)
          .send({ status: false, message: "Something went wrong" });
      } else {
        res.status(201).send({
          status: true,
          message: "Data successfully added",
        });
        const newWarehouse = new Warehouse(req.body);
        newWarehouse.save((err: Error, warehouse: MongooseDocument) => {
          console.log("Added to warehouse");
        });
      }
    });
  }

  public update(req: Request, res: Response) {
    const storeId = req.params.id;
    if (storeId) {
      Store.findByIdAndUpdate(storeId, req.body, (err: Error, store: any) => {
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

  public delete(req: Request, res: Response) {
    const storeId = req.params.id;
    Store.findByIdAndDelete(storeId, (err: Error, deleted: any) => {
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
