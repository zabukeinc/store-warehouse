"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Warehouse extends sequelize_1.Model {
}
exports.Warehouse = Warehouse;
Warehouse.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    warehouse_code: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
        validate: {
            isUnique(value) {
                return Warehouse.findOne({ where: { warehouse_code: value } }).then((warehouse_code) => {
                    if (warehouse_code) {
                        throw new Error("Warehouse code already exist");
                    }
                });
            },
        },
    },
    location_name: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: true,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    is_store: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: "warehouse",
    sequelize: database_1.db,
});
//# sourceMappingURL=warehouse.model.js.map