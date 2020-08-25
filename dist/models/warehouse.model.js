"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = exports.WarehouseSchema = void 0;
const mongoose = require("mongoose");
exports.WarehouseSchema = new mongoose.Schema({
    branch_id: { type: Number },
    warehoue_code: { type: String, default: "NAMA-Store-Warehouse" },
    location_name: { type: String },
    address: { type: String },
    phone: { type: String },
    status: { type: Boolean },
    user_id: { type: String },
});
exports.Warehouse = mongoose.model("Warehouse", exports.WarehouseSchema);
//# sourceMappingURL=warehouse.model.js.map