import * as mongoose from "mongoose";

export interface WarehouseInterface extends mongoose.Document {
  branch_id: number;
  warehouse_code: string;
  location_name: string;
  address: string;
  phone: string | number;
  status: boolean;
  user_id: string;
}

export const WarehouseSchema: mongoose.Schema = new mongoose.Schema({
  branch_id: { type: Number },
  warehouse_code: { type: String, default: "NAMA-Store-Warehouse" },
  location_name: { type: String },
  address: { type: String },
  phone: { type: String },
  status: { type: Boolean },
  user_id: { type: String },
});

export const Warehouse = mongoose.model<WarehouseInterface>(
  "Warehouse",
  WarehouseSchema
);
