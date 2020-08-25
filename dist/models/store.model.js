"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = exports.StoreSchema = void 0;
const mongoose = require("mongoose");
exports.StoreSchema = new mongoose.Schema({
    branch_id: { type: String },
    store_code: { type: String },
    location_name: { type: String },
    address: { type: String },
    phone: { type: String },
    status: { type: Boolean },
    user_Id: { type: String },
});
exports.Store = mongoose.model("Store", exports.StoreSchema);
//# sourceMappingURL=store.model.js.map