import * as mongoose from "mongoose";

export interface StoreInterface extends mongoose.Document {
  branch_id: string;
  store_code: string;
  location_name: string;
  address: string;
  phone: string;
  status: boolean;
  user_id: string;
}

export const StoreSchema: mongoose.Schema = new mongoose.Schema({
  branch_id: { type: String },
  store_code: { type: String },
  location_name: { type: String },
  address: { type: String },
  phone: { type: String },
  status: { type: Boolean },
  user_Id: { type: String },
});

export const Store = mongoose.model<StoreInterface>("Store", StoreSchema);
