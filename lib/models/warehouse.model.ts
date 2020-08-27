import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from "../config/database";

export class Warehouse extends Model {
  public id!: number;
  public branch_id: number;
  public warehouse_code: string;
  public location_name: string;
  public address: string;
  public phone: string;
  public status: boolean;
  public is_store: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export interface WarehouseInterface {
  branch_id: number;
  warehouse_code: string;
  location_name: string;
  address: string;
  phone: string;
  status: boolean;
  is_store: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

Warehouse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    warehouse_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
      validate: {
        isUnique(value) {
          return Warehouse.findOne({ where: { warehouse_code: value } }).then(
            (warehouse_code) => {
              if (warehouse_code) {
                throw new Error("Warehouse code already exist");
              }
            }
          );
        },
      },
    },
    location_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "warehouse", // table name
    sequelize: db,
  }
);

Warehouse.sync().then(() => console.log("Table successfully added."));
